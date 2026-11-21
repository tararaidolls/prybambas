// Справжні обкладинки товарів з магазинів.
//   npm run covers                 — завантажити обкладинки й превʼю для товарів, у яких їх ще немає
//   npm run covers -- --force      — перезавантажити для всіх
//   npm run covers -- one-verb-a-day outsmart — лише для вибраних товарів
//   npm run covers -- --no-gallery — лише обкладинки, без додаткових фото
//
// Джерело обкладинки (за пріоритетом): Amazon (обкладинка книжки) → Etsy (головне фото) → TpT → Prom.
// Можна вибрати конкретне оголошення: у product.yml додай coverFrom: "kdp B0GW3S7FLK" (платформа й номер).
// Додаткові фото (images) беруться з Etsy, а якщо його немає — з інших оголошень.
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { loadShops, resolveListings } from "./model.mjs";

const args = process.argv.slice(2);
const force = args.includes("--force");
const gallery = !args.includes("--no-gallery");
const only = args.filter((a) => !a.startsWith("--"));
const shops = loadShops();
const DIR = "content/products";
const PRIORITY = ["kdp", "etsy", "tpt", "prom", "gumroad"];

// Розмір картинки через параметри CDN магазинів (без окремої обробки зображень)
function sized(url, size) {
  if (!url) return url;
  if (url.includes("m.media-amazon.com")) return url.replace(/(\.[A-Za-z0-9_,]+)?\.(jpg|png)$/i, `._SL${size}_.$2`);
  if (url.includes("i.etsystatic.com")) return url.replace(/il_fullxfull\./, `il_${size >= 700 ? 794 : 570}xN.`);
  if (url.includes("images.prom.ua")) return url.replace(/_w\d+_h\d+_/, `_w${size}_h${size}_`);
  return url;
}

async function download(url, file) {
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (Prybambas catalog)" } });
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  const type = res.headers.get("content-type") || "";
  if (!type.startsWith("image/")) throw new Error(`${url} → не картинка (${type})`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(file, buf);
  return buf.length;
}

// Записати cover / images у product.yml, не чіпаючи решту файлу
function setYml(file, key, value) {
  let s = fs.readFileSync(file, "utf8");
  const line = `${key}: ${value}`;
  if (new RegExp(`^${key}:`, "m").test(s)) s = s.replace(new RegExp(`^${key}:.*$`, "m"), line);
  else if (/^listings:/m.test(s)) s = s.replace(/^(# Оголошення[^\n]*\n)?listings:/m, (m) => `${line}\n\n${m}`);
  else s = s.trimEnd() + `\n${line}\n`;
  fs.writeFileSync(file, s);
}

let done = 0, skipped = 0, failed = 0;
for (const slug of fs.readdirSync(DIR).filter((d) => !d.startsWith("_") && fs.statSync(path.join(DIR, d)).isDirectory())) {
  if (only.length && !only.includes(slug)) continue;
  const ymlFile = path.join(DIR, slug, "product.yml");
  const meta = yaml.load(fs.readFileSync(ymlFile, "utf8")) || {};
  if (meta.cover && !force) { skipped++; continue; }
  const listings = resolveListings(meta, shops).filter((l) => l.image && !["removed", "missing"].includes(l.status));
  if (!listings.length) { console.log(`– ${slug}: немає оголошень із фото`); continue; }

  const pick = meta.coverFrom
    ? listings.find((l) => `${l.platform} ${l.id}` === meta.coverFrom)
    : [...listings].sort((a, b) =>
        PRIORITY.indexOf(a.platform) - PRIORITY.indexOf(b.platform)
        || (a.format === "paperback" ? -1 : 0) - (b.format === "paperback" ? -1 : 0)
        || (a.lang === "en" ? -1 : 0) - (b.lang === "en" ? -1 : 0)
        || a.index - b.index)[0];
  if (!pick) { console.log(`✗ ${slug}: coverFrom «${meta.coverFrom}» не знайдено`); failed++; continue; }

  try {
    const kb = Math.round((await download(sized(pick.image, 1000), path.join(DIR, slug, "cover.jpg"))) / 1024);
    setYml(ymlFile, "cover", `cover.jpg            # з ${pick.platform} ${pick.id}`);
    let extra = [];
    if (gallery) {
      const etsy = listings.find((l) => l.platform === "etsy" && l.images?.length);
      const urls = etsy
        ? etsy.images.slice(0, 3)
        : listings.filter((l) => l !== pick && l.image).map((l) => l.image).filter((u, i, a) => a.indexOf(u) === i).slice(0, 3);
      for (const [i, u] of urls.entries()) {
        const name = `preview-${i + 1}.jpg`;
        try { await download(sized(u, 570), path.join(DIR, slug, name)); extra.push(name); } catch (e) { console.log(`  ! ${slug}/${name}: ${e.message}`); }
      }
      if (extra.length) setYml(ymlFile, "images", `[${extra.join(", ")}]`);
    }
    console.log(`✓ ${slug}: обкладинка з ${pick.platform} ${pick.id} (${kb} КБ)${extra.length ? ` + ${extra.length} фото` : ""}`);
    done++;
  } catch (e) {
    console.log(`✗ ${slug}: ${e.message}`);
    failed++;
  }
}
console.log(`\nОбкладинок: ${done}, пропущено (вже є): ${skipped}, помилок: ${failed}`);
if (failed) process.exitCode = 1;
