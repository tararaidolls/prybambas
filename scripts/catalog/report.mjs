// Звіт по каталогу: npm run catalog → CATALOG.md
// Показує, які товари на яких платформах, ціни, і що потребує уваги.
//   --check  — завершитись з помилкою, якщо є критичні проблеми (для GitHub Actions)
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import { loadShops, resolveListings, PLATFORMS } from "./model.mjs";

const COLS = ["kdp", "tpt", "etsy", "prom", "gumroad"];
const site = yaml.load(fs.readFileSync("src/_data/site.yml", "utf8"));
const shops = loadShops();
const dir = "content/products";

const products = fs.readdirSync(dir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
  .map((d) => {
    const meta = yaml.load(fs.readFileSync(path.join(dir, d.name, "product.yml"), "utf8")) || {};
    const texts = site.languages.filter((l) => fs.existsSync(path.join(dir, d.name, `${l}.md`)));
    const title = (() => {
      const f = path.join(dir, d.name, `${site.defaultLang}.md`);
      const m = fs.existsSync(f) && fs.readFileSync(f, "utf8").match(/^title:\s*"?(.*?)"?\s*$/m);
      return m ? m[1] : meta.name || d.name;
    })();
    return { slug: d.name, ...meta, title, texts, listings: resolveListings(meta, shops) };
  })
  .sort((a, b) => String(a.series).localeCompare(String(b.series)) || (a.order ?? 99) - (b.order ?? 99));

const issues = { critical: [], warn: [], info: [] };
const money = (p, c) => p == null ? "?" : p === 0 ? "free" : `${c === "UAH" ? "" : c === "USD" ? "$" : ""}${p}${c === "UAH" ? " ₴" : c && !["USD", "UAH"].includes(c) ? " " + c : ""}`;
const langList = (ls) => [...new Set(ls.map((l) => l.lang).filter(Boolean))].join(", ");

// ---- перевірки товарів ----
for (const p of products) {
  const active = p.listings.filter((l) => !["removed", "missing"].includes(l.status));
  for (const l of p.listings) {
    if (l.status === "missing") issues.critical.push(`**${p.slug}** · ${PLATFORMS[l.platform]?.label || l.platform} ${l.id}: оголошення немає в магазині (знімок від ${l.snapshotDate}). Зняте з продажу або змінився номер?`);
    if (!l.url) issues.warn.push(`**${p.slug}** · ${l.platform} ${l.id || ""}: немає посилання`);
    if (!l.lang) issues.warn.push(`**${p.slug}** · ${l.platform} ${l.id}: не вказана мова видання (lang)`);
    if (l.platform === "prom" && l.status === "preorder" && ["pdf", "digital"].includes(l.format))
      issues.info.push(`**${p.slug}** · Prom ${l.id}: PDF позначений «Під замовлення» — для файлу краще «В наявності»`);
  }
  if (p.status === "available" && !active.length) issues.warn.push(`**${p.slug}**: позначений «можна купити», але не має жодного активного оголошення`);
  if (p.status === "coming-soon" && active.length) issues.warn.push(`**${p.slug}**: позначений «скоро», хоча вже продається (${active.length} огол.) — зміни status на available`);
  if (!p.texts.length) issues.info.push(`**${p.slug}**: немає описів, тому товар не показується на сайті (додай ${site.defaultLang}.md)`);
  else if (p.texts.length < site.languages.length) issues.info.push(`**${p.slug}**: опис є лише мовами ${p.texts.join(", ")}`);
  // кілька однакових оголошень
  const keys = new Map();
  for (const l of p.listings) { const k = `${l.platform}|${l.id}`; if (keys.has(k)) issues.warn.push(`**${p.slug}**: ${l.platform} ${l.id} вказано двічі`); keys.set(k, 1); }
}

// ---- оголошення в магазинах, які не прив'язані до жодного товару ----
const used = new Set(products.flatMap((p) => p.listings.map((l) => `${l.platform}|${l.id}`)));
const unassigned = Object.values(shops).flatMap((s) => s.items.filter((i) => !used.has(`${s.platform}|${i.id}`)).map((i) => ({ ...i })));
for (const i of unassigned) issues.warn.push(`${PLATFORMS[i.platform]?.label || i.platform} ${i.id} «${i.title}» не прив'язане до товару в каталозі`);
// оголошення, що належать двом товарам
const owners = new Map();
for (const p of products) for (const l of p.listings) { const k = `${l.platform}|${l.id}`; owners.set(k, [...(owners.get(k) || []), p.slug]); }
for (const [k, o] of owners) if (new Set(o).size > 1) issues.critical.push(`${k.replace("|", " ")} прив'язане до кількох товарів: ${[...new Set(o)].join(", ")}`);

// ---- звіт ----
const today = new Date().toISOString().slice(0, 10);
const L = [];
L.push(`# Каталог Prybambas`, ``);
L.push(`Згенеровано ${today} командою \`npm run catalog\`. Не редагуй вручну: зміни вносяться в \`content/products/*/product.yml\`, а дані магазинів оновлює \`npm run shops\`.`, ``);
L.push(`## Магазини`, ``, `| Платформа | Оголошень | Знімок | Джерело |`, `|---|---:|---|---|`);
for (const c of COLS) {
  const s = shops[c];
  L.push(`| ${PLATFORMS[c].label} | ${s ? s.count : "—"} | ${s ? s.updated : "немає"} | ${s ? s.source : c === "etsy" ? "Etsy блокує автоматичне читання: потрібен CSV з кабінету" : "—"} |`);
}
const totalListings = products.reduce((n, p) => n + p.listings.length, 0);
L.push(``, `**${products.length}** товарів · **${totalListings}** оголошень у каталозі · **${unassigned.length}** не прив'язаних · **${issues.critical.length}** критичних проблем`, ``);

L.push(`## Товар × платформа`, ``, `Число — кількість оголошень, у дужках — мови видання. «сайт» — чи показується товар на prybambas.com.`, ``);
L.push(`| Товар | Серія | ${COLS.map((c) => PLATFORMS[c].label).join(" | ")} | сайт |`, `|---|---|${COLS.map(() => ":---:").join("|")}|:---:|`);
for (const p of products) {
  const cells = COLS.map((c) => {
    const ls = p.listings.filter((l) => l.platform === c);
    if (!ls.length) return "—";
    const miss = ls.filter((l) => l.status === "missing").length;
    return `${ls.length}${miss ? ` ⚠${miss}` : ""} (${langList(ls)})`;
  });
  L.push(`| ${p.title}${p.status === "coming-soon" ? " · _скоро_" : ""} | ${p.series} | ${cells.join(" | ")} | ${p.texts.length ? "✓" : "—"} |`);
}

L.push(``, `## Потребує уваги`, ``);
const sec = (name, arr) => { if (!arr.length) return; L.push(`### ${name} (${arr.length})`, ``, ...arr.map((x) => `- ${x}`), ``); };
sec("Критично", issues.critical);
sec("Варто виправити", issues.warn);
sec("До відома", issues.info);
if (!issues.critical.length && !issues.warn.length && !issues.info.length) L.push(`Усе гаразд.`, ``);

L.push(`## Товари детально`, ``);
for (const p of products) {
  if (!p.listings.length) continue;
  L.push(`### ${p.title}`, ``, `\`content/products/${p.slug}/\` · серія ${p.series} · ${p.status}`, ``);
  L.push(`| Платформа | Мова | Варіант | Формат | Ціна | Статус | Назва на платформі |`, `|---|---|---|---|---:|---|---|`);
  for (const l of p.listings) {
    const title = (l.title || "").replace(/\|/g, "·");
    L.push(`| ${l.url ? `[${PLATFORMS[l.platform]?.label || l.platform}](${l.url})` : l.platform} | ${l.lang || "?"} | ${l.variant || ""} | ${l.format || ""} | ${money(l.price, l.currency)}${l.originalPrice ? ` ~~${money(l.originalPrice, l.currency)}~~` : ""} | ${l.status} | ${title.length > 90 ? title.slice(0, 88) + "…" : title} |`);
  }
  L.push(``);
}

fs.writeFileSync("CATALOG.md", L.join("\n"));
console.log(`CATALOG.md: ${products.length} товарів, ${totalListings} оголошень, не прив'язаних ${unassigned.length}; критичних ${issues.critical.length}, варто виправити ${issues.warn.length}, до відома ${issues.info.length}`);
if (process.argv.includes("--check") && issues.critical.length) {
  console.error(issues.critical.join("\n"));
  process.exit(1);
}
