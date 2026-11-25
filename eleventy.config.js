import yaml from "js-yaml";
import fs from "node:fs";
import path from "node:path";
import { renderOgImages } from "./scripts/og-images.mjs";

// Статичні файли, які копіюються на сайт без змін (ігри, стилі, іконки)
const PASSTHROUGH = [
  "what-if", "inventor", "coach", "little", "assets",
  "CNAME", "robots.txt", "llms.txt", "manifest.json", "sw.js",
  "icon-192.png", "icon-512.png", "logo.png",
];

export default function (cfg) {
  cfg.addDataExtension("yml,yaml", (contents) => yaml.load(contents));
  for (const p of PASSTHROUGH) cfg.addPassthroughCopy(p);
  // Бонус-сторінки за QR-кодами з книжки «Prybambas Passport: Around the World in 80 Days»
  cfg.addPassthroughCopy({ "passport-80": "en/80" });
  // Prybambas Offline: спільний рендерер плаката (браузер + друк) і бібліотека QR-кодів
  cfg.addPassthroughCopy({ "offline/poster.mjs": "offline/poster.mjs" });
  cfg.addPassthroughCopy({ "node_modules/qrcode-generator/qrcode.js": "assets/vendor/qrcode.js" });
  cfg.addWatchTarget("offline/");
  // Картинки й файли з папки content (обкладинки, превʼю)
  cfg.addPassthroughCopy("content/**/*.{jpg,jpeg,png,webp,gif,svg}");
  cfg.addWatchTarget("content/");

  // Назва мови мовою інтерфейсу: langName("de", "uk") → "німецька"
  cfg.addFilter("langName", (code, inLang) => {
    try {
      const name = new Intl.DisplayNames([inLang], { type: "language" }).of(code);
      return name.charAt(0).toLocaleUpperCase(inLang) + name.slice(1);
    } catch { return code; }
  });
  cfg.addFilter("dateLocal", (d, lang) =>
    new Date(d).toLocaleDateString(lang, { year: "numeric", month: "long", day: "numeric" }));
  cfg.addFilter("dateRfc", (d) => new Date(d).toUTCString());
  cfg.addFilter("dateIso", (d) => new Date(d).toISOString().slice(0, 10));
  cfg.addFilter("fmt", (s, vars = {}) => String(s).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? ""));
  cfg.addFilter("where", (arr, key, val) => (arr || []).filter((x) => x[key] === val));
  // Кнопки, які показуються цією мовою сайту (напр. Prom лише українською)
  cfg.addFilter("forLang", (buttons, lang) => (buttons || []).filter((b) => !b.markets || b.markets.includes(lang)));
  // Адреса картинки-превʼю для сторінки: /uk/shop/x/ → /og/uk/shop/x.png
  cfg.addFilter("ogPath", (url) => "/og" + String(url).replace(/\/$/, "").replace(/\/index\.html$/, "") + ".png");
  // Після збірки малюємо превʼю для соцмереж (scripts/og-images.mjs)
  cfg.on("eleventy.after", async ({ dir }) => {
    const n = await renderOgImages(dir.output);
    if (n) console.log(`[og] ${n} картинок-превʼю`);
  });
  // Сторінка гри потрібною мовою: беремо оригінал (напр. what-if/index.html), додаємо <base>,
  // мовний заголовок/опис/canonical/hreflang і вибір мови до запуску скриптів гри.
  const esc = (v) => String(v ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const hreflangLinks = (alts, base) => alts.map((a) => `<link rel="alternate" hreflang="${a.lang}" href="${base}${a.url}">`).join("\n");
  cfg.addFilter("localizeGame", (G, siteUrl) => {
    let html = fs.readFileSync(G.file, "utf8");
    const head = `<base href="${G.base}">
<script>try{localStorage.setItem("prybambas_lang","${G.lang}")}catch(e){}</script>
${hreflangLinks(G.alternates, siteUrl)}`;
    html = html
      .replace(/<html([^>]*)\slang="[^"]*"/, `<html$1 lang="${G.lang}"${G.rtl ? ' dir="rtl"' : ""}`)
      .replace(/<head>/, `<head>\n${head}`)
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(G.title)} · Prybambas</title>`)
      .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${esc(G.desc)}"`)
      .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${siteUrl}${G.url}"`)
      .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${siteUrl}${G.url}"`)
      .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${esc(G.title)} · Prybambas"`)
      .replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${esc(G.desc)}"`);
    return html;
  });
  // Оригінальні сторінки ігор (x-default) теж отримують посилання на мовні версії
  cfg.on("eleventy.after", async ({ dir }) => {
    const { default: catalog } = await import(`./src/_data/catalog.js?t=${Date.now()}`);
    const site = yaml.load(fs.readFileSync("src/_data/site.yml", "utf8"));
    const byGame = new Map();
    for (const p of catalog.gameLangPages) byGame.set(p.file, p.alternates);
    for (const [file, alts] of byGame) {
      const out = path.join(dir.output, file);
      if (!fs.existsSync(out)) continue;
      const html = fs.readFileSync(out, "utf8");
      if (html.includes('hreflang="x-default"')) continue;
      fs.writeFileSync(out, html.replace(/<\/head>/, `${hreflangLinks(alts, site.url)}\n</head>`));
    }
  });
  cfg.addFilter("json", (v) => JSON.stringify(v));
  cfg.addFilter("absolute", (url, base) => new URL(url, base).href);
  cfg.addFilter("stripHtml", (s) => String(s || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk",
  };
}
