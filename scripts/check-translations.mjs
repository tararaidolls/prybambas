// Перевіряє повноту перекладів. Запуск: npm run check
// Помилка (збірка зупиняється), якщо:
//   - у Лабораторії винахідника в якійсь мові бракує фраз порівняно з англійською;
//   - у «Що якщо?» в якійсь мові немає питань;
//   - в інтерфейсі магазину (i18n.yml) бракує ключів;
//   - товар, серія чи допис не має тексту мовою за замовчуванням.
// Попередження (збірка триває): товар чи допис перекладено не всіма мовами магазину.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import yaml from "js-yaml";

const site = yaml.load(fs.readFileSync("src/_data/site.yml", "utf8"));
const GAME_LANGS = site.gameLanguages.map((l) => l.code);
const errors = [], warnings = [], rows = [];

const flat = (o, p = "", out = {}) => {
  if (Array.isArray(o)) o.forEach((v, i) => flat(v, `${p}[${i}]`, out));
  else if (o && typeof o === "object") for (const k in o) flat(o[k], p ? `${p}.${k}` : k, out);
  else out[p] = o;
  return out;
};
const load = (file) => {
  const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
  // англійська потрібна, бо деякі файли посилаються на неї
  for (const f of [file.replace(/[a-z]+\.js$/, "en.js"), file]) {
    vm.runInContext(fs.readFileSync(f, "utf8").replace(/^\s*(const|let) /gm, "var "), ctx);
  }
  return ctx;
};

// 1. Лабораторія винахідника
{
  const en = load("inventor/content/en.js");
  const base = { ...flat(en.inventor_db_en, "db"), ...flat(en.inventor_missions_en, "missions") };
  const total = Object.keys(base).length;
  for (const l of GAME_LANGS) {
    const file = `inventor/content/${l}.js`;
    if (!fs.existsSync(file)) { errors.push(`Лабораторія: немає файлу ${file}`); continue; }
    const c = load(file);
    const cur = { ...flat(c[`inventor_db_${l}`], "db"), ...flat(c[`inventor_missions_${l}`], "missions") };
    const missing = Object.keys(base).filter((k) => !(k in cur) || cur[k] === "");
    rows.push(["Лабораторія", l, `${total - missing.length}/${total}`]);
    if (missing.length) errors.push(`Лабораторія (${l}): бракує ${missing.length} фраз, напр. ${missing.slice(0, 3).join(", ")}`);
  }
}

// 2. Що якщо?
for (const l of GAME_LANGS) {
  const file = `what-if/content/${l}.js`;
  if (!fs.existsSync(file)) { errors.push(`Що якщо?: немає файлу ${file}`); continue; }
  const c = load(file);
  const counts = ["single", "chain", "deduction"].map((k) => (c[`whatif_${k}_${l}`] || []).length);
  rows.push(["Що якщо?", l, counts.join(" / ")]);
  if (l !== "en") {
    const en = load("what-if/content/en.js");
    const same = ["single", "chain", "deduction"].filter((k) => JSON.stringify(c[`whatif_${k}_${l}`]) === JSON.stringify(en[`whatif_${k}_en`]));
    if (same.length) warnings.push(`Що якщо? (${l}): ${same.join(", ")} — це копія англійської, а не переклад`);
  }
  if (counts.some((n) => !n)) errors.push(`Що якщо? (${l}): порожній список питань (${counts.join(" / ")})`);
}

// 3. Інтерфейс магазину
{
  const i18n = yaml.load(fs.readFileSync("src/_data/i18n.yml", "utf8"));
  const base = Object.keys(flat(i18n[site.defaultLang]));
  for (const l of site.languages) {
    const cur = flat(i18n[l] || {});
    const missing = base.filter((k) => !(k in cur));
    if (missing.length) errors.push(`i18n.yml (${l}): бракує ключів ${missing.slice(0, 5).join(", ")}`);
  }
}

// 4. Контент: серії, товари, ідеї, ігри
for (const kind of ["series", "products", "ideas", "games"]) {
  const dir = path.join("content", kind);
  if (!fs.existsSync(dir)) continue;
  for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!d.isDirectory() || d.name.startsWith("_")) continue;
    const langs = kind === "games" ? GAME_LANGS : site.languages;
    const have = langs.filter((l) => fs.existsSync(path.join(dir, d.name, `${l}.md`)));
    if (!have.length && kind === "products") { warnings.push(`${kind}/${d.name}: немає описів — товар є в каталозі, але не показується на сайті`); continue; }
    if (!have.includes(site.defaultLang)) errors.push(`${kind}/${d.name}: немає тексту мовою за замовчуванням (${site.defaultLang}.md)`);
    const miss = langs.filter((l) => !have.includes(l));
    if (miss.length) warnings.push(`${kind}/${d.name}: немає перекладу для ${miss.join(", ")}`);
  }
}

const byGame = {};
for (const [g, l, v] of rows) (byGame[g] ||= []).push(`${l} ${v}`);
for (const g in byGame) console.log(`${g}: ${byGame[g].join(" · ")}`);
if (warnings.length) console.log(`\nПопередження (${warnings.length}):\n  ` + warnings.join("\n  "));
if (errors.length) { console.error(`\nПомилки (${errors.length}):\n  ` + errors.join("\n  ")); process.exit(1); }
console.log("\nПереклади повні.");
