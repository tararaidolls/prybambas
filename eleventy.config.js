import yaml from "js-yaml";

// Статичні файли, які копіюються на сайт без змін (ігри, стилі, іконки)
const PASSTHROUGH = [
  "what-if", "inventor", "coach", "book", "assets",
  "index.html", "about.html", "faq.html",
  "CNAME", "robots.txt", "llms.txt", "manifest.json", "sw.js",
  "icon-192.png", "icon-512.png", "logo.png", "logo.jpg", "bg-image.jpg",
];

export default function (cfg) {
  cfg.addDataExtension("yml,yaml", (contents) => yaml.load(contents));
  for (const p of PASSTHROUGH) cfg.addPassthroughCopy(p);
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
  cfg.addFilter("json", (v) => JSON.stringify(v));
  cfg.addFilter("absolute", (url, base) => new URL(url, base).href);
  cfg.addFilter("stripHtml", (s) => String(s || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk",
  };
}
