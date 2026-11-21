// Оновлює знімки магазинів у content/shops/<платформа>.json.
//
//   npm run shops                      — прочитати всі магазини з shops.yml
//   npm run shops -- prom tpt          — лише вибрані
//   npm run shops -- --etsy-csv файл.csv — імпорт оголошень Etsy з CSV
//   npm run shops -- --from папка      — розібрати збережені сторінки (prom.html, tpt.html…) без інтернету
//
// Знімок = що зараз є в магазині. Каталог (content/products) посилається на ці оголошення за id.
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { fetchProm, fetchTpt, fetchAmazon, parseProm, parseTpt, parseAmazonAuthor, etsyFromCsv } from "./shops.mjs";

const cfg = yaml.load(fs.readFileSync("content/shops/shops.yml", "utf8"));
const args = process.argv.slice(2);
const flag = (name) => { const i = args.indexOf(name); return i >= 0 ? args.splice(i, 2)[1] : null; };
const etsyCsv = flag("--etsy-csv");
const fromDir = flag("--from");
const only = args.filter((a) => !a.startsWith("-"));

const today = new Date().toISOString().slice(0, 10);
// Коротко: що змінилося між знімками
const summarize = (a, b) => {
  const A = new Map(a.map((i) => [i.id, i])), B = new Map(b.map((i) => [i.id, i]));
  const added = [...B.keys()].filter((k) => !A.has(k)).length;
  const removed = [...A.keys()].filter((k) => !B.has(k)).length;
  const price = [...B.keys()].filter((k) => A.has(k) && A.get(k).price !== B.get(k).price).length;
  const other = [...B.keys()].filter((k) => A.has(k) && A.get(k).price === B.get(k).price && JSON.stringify(A.get(k)) !== JSON.stringify(B.get(k))).length;
  return [added && `+${added} нових`, removed && `−${removed} зникло`, price && `${price} змін ціни`, other && `${other} інших змін`].filter(Boolean).join(", ") || "без змін";
};
const save = (platform, items, source) => {
  items.sort((a, b) => String(a.title).localeCompare(String(b.title)));
  const file = path.join("content/shops", `${platform}.json`);
  // Перезаписуємо лише коли змінилися самі оголошення, щоб не було щоденних «порожніх» змін
  const old = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : null;
  if (old && JSON.stringify(old.items) === JSON.stringify(items)) { console.log(`= ${platform}: ${items.length} оголошень, без змін`); return; }
  fs.writeFileSync(file, JSON.stringify({ platform, source, updated: today, count: items.length, items }, null, 2) + "\n");
  const diff = old ? summarize(old.items, items) : "новий знімок";
  console.log(`✓ ${platform}: ${items.length} оголошень → ${file} (${diff})`);
};

const readers = {
  prom: async () => fromDir ? parseProm(fs.readFileSync(path.join(fromDir, "prom.html"), "utf8"), new URL(cfg.prom).origin) : fetchProm(cfg.prom),
  tpt: async () => fromDir
    ? fs.readdirSync(fromDir).filter((f) => /^tpt\d*\.html$/.test(f)).flatMap((f) => parseTpt(fs.readFileSync(path.join(fromDir, f), "utf8")))
    : fetchTpt(cfg.tpt),
  kdp: async () => fromDir ? parseAmazonAuthor(fs.readFileSync(path.join(fromDir, "amazon.html"), "utf8")) : fetchAmazon(cfg.kdp),
};

let failed = 0;
if (etsyCsv) save("etsy", etsyFromCsv(fs.readFileSync(etsyCsv, "utf8").replace(/^\uFEFF/, ""), cfg.etsy), `CSV з кабінету Etsy`);
for (const [platform, read] of Object.entries(readers)) {
  if (etsyCsv && !only.length) break;
  if (only.length && !only.includes(platform)) continue;
  try {
    const items = await read();
    const uniq = [...new Map(items.map((i) => [i.id, i])).values()];
    if (!uniq.length) throw new Error("не знайдено жодного оголошення — можливо, змінилась сторінка магазину");
    save(platform, uniq, fromDir ? `збережені сторінки` : cfg[platform]);
  } catch (e) {
    failed++;
    console.error(`✗ ${platform}: ${e.message} (знімок не змінено)`);
  }
}
if (failed) process.exitCode = 1;
