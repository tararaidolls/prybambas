// Файл для друку плаката Prybambas Offline.
//
//   npm run offline:print -- заявка.json [--logo logo.png] [--size a2] [--out print/]
//
// заявка.json — файл, який заклад завантажив у конструкторі (або поле `config` з листа форми).
// Якщо логотип прийшов окремим файлом (вкладення форми), передай його через --logo.
// Результат у print/: <заклад>-<формат>.png (300 dpi, з запасом під обріз з offline.yml)
// + <заклад>-preview.png і <заклад>-order.txt (усе для замовлення в Gelato).
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { Resvg } from "@resvg/resvg-js";
import offline from "../../src/_data/offline.js";
import { renderPoster, gameQrUrl } from "../../offline/poster.mjs";

const require = createRequire(import.meta.url);
const qrcode = require("qrcode-generator");
const font = (pkg, file) => path.join(path.dirname(require.resolve(`${pkg}/package.json`)), file);
const FONTS = [
  font("@expo-google-fonts/geologica", "400Regular/Geologica_400Regular.ttf"),
  font("@expo-google-fonts/geologica", "600SemiBold/Geologica_600SemiBold.ttf"),
  font("@expo-google-fonts/geologica", "800ExtraBold/Geologica_800ExtraBold.ttf"),
  font("@expo-google-fonts/caveat", "700Bold/Caveat_700Bold.ttf"),
];
const DPI = 300;
const SITE = "https://prybambas.com";

const args = process.argv.slice(2);
const opt = (name) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args.splice(i, 2)[1] : null; };
const logoFile = opt("logo");
const sizeOverride = opt("size");
const outDir = opt("out") || "print";
const file = args[0];
if (!file) { console.error("Вкажи файл заявки: npm run offline:print -- заявка.json [--logo logo.png]"); process.exit(1); }

const req = JSON.parse(fs.readFileSync(file, "utf8"));
const c = req.config || req; // з листа форми може прийти { config: {...} }
const L = offline.forLang(c.lang) ;
if (!L.posters.length) { console.error(`Невідома мова плаката: ${c.lang}`); process.exit(1); }

const base = L.posters.find((p) => p.slug === c.poster);
if (!base) { console.error(`Немає базового плаката «${c.poster}». Є: ${L.posters.map((p) => p.slug).join(", ")}`); process.exit(1); }
const pick = (list, slugs, what) => (slugs || []).map((s) => list.find((x) => x.slug === s) || console.warn(`! ${what} «${s}» не знайдено, пропускаю`)).filter(Boolean);
const size = L.sizes.find((s) => s.key === (sizeOverride || c.size)) || L.sizes.find((s) => s.key === L.defaultSize);

let logo = c.venue?.logo || null;
if (logoFile) {
  const ext = path.extname(logoFile).slice(1).toLowerCase();
  const mime = { svg: "image/svg+xml", jpg: "image/jpeg", jpeg: "image/jpeg", webp: "image/webp" }[ext] || "image/png";
  logo = `data:${mime};base64,${fs.readFileSync(logoFile).toString("base64")}`;
}

const data = {
  poster: { ...L.t.poster, palette: base.palette, title: base.title, subtitle: base.subtitle },
  games: pick(L.games, c.games, "Гру").map((g) => ({ ...g, url: gameQrUrl(SITE, g.path, c.venue?.slug) })),
  tasks: pick(L.tasks, c.tasks, "Завдання"),
  venue: { name: c.venue?.name || "", slug: c.venue?.slug || "", logo },
  size,
  qrcode,
};

const render = (svg, width) => new Resvg(svg, { fitTo: { mode: "width", value: width }, font: { fontFiles: FONTS, loadSystemFonts: false, defaultFontFamily: "Geologica" } }).render().asPng();

fs.mkdirSync(outDir, { recursive: true });
const name = data.venue.slug || "poster";
const bleed = L.bleed;
const pxW = Math.round(((size.w + bleed * 2) / 25.4) * DPI);
const printFile = path.join(outDir, `${name}-${size.key}.png`);
fs.writeFileSync(printFile, render(renderPoster({ ...data, bleed }), pxW));
fs.writeFileSync(path.join(outDir, `${name}-preview.png`), render(renderPoster(data), 1000));

const contact = req.contact || {};
const order = [
  `Prybambas Offline — замовлення для Gelato`,
  ``,
  `Заклад:     ${data.venue.name || "—"}`,
  `Файл:       ${printFile}  (${pxW} px завширшки, ${DPI} dpi, обріз ${bleed} мм)`,
  `Формат:     ${size.label}${size.gelato ? `  · Gelato productUid: ${size.gelato}` : "  · productUid: заповни sizes[].gelato в offline.yml"}`,
  `Кількість:  ${c.qty || 1}`,
  `Плакат:     ${base.name} (${c.lang})`,
  `Ігри:       ${data.games.map((g) => `${g.title} → ${g.url}`).join("\n            ") || "—"}`,
  `Завдання:   ${data.tasks.map((t) => `${t.label}: ${t.text}`).join("\n            ") || "—"}`,
  ``,
  `Контакт:    ${contact.name || "—"} · ${contact.email || "—"} · ${contact.phone || "—"}`,
  `Адреса:     ${contact.address || "—"}`,
  contact.message ? `Коментар:   ${contact.message}` : "",
  logo ? "" : `\n! Логотипа немає: якщо він прийшов окремо, запусти ще раз з --logo файл.png`,
].filter((l) => l !== "").join("\n");
fs.writeFileSync(path.join(outDir, `${name}-order.txt`), order + "\n");
console.log(order);
