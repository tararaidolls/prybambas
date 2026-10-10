// Збирає весь контент з папки content/ і готує дані для сторінок.
//
//   content/series/<slug>/series.yml  + <мова>.md   — серії (лінійки)
//   content/products/<slug>/product.yml + <мова>.md — товари
//   content/ideas/<slug>/post.yml + <мова>.md       — дописи / ідеї
//
// Папки, назва яких починається з "_", пропускаються (це шаблони).
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({ html: true, linkify: true, typographer: true });
const ROOT = path.resolve("content");
const site = yaml.load(fs.readFileSync(path.resolve("src/_data/site.yml"), "utf8"));
const LANGS = site.languages;

function readEntries(kind, metaFile) {
  const dir = path.join(ROOT, kind);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
    .map((d) => {
      const folder = path.join(dir, d.name);
      const metaPath = path.join(folder, metaFile);
      const meta = fs.existsSync(metaPath) ? yaml.load(fs.readFileSync(metaPath, "utf8")) || {} : {};
      const texts = {};
      for (const lang of LANGS) {
        const file = path.join(folder, `${lang}.md`);
        if (!fs.existsSync(file)) continue;
        const { data, content } = matter(fs.readFileSync(file, "utf8"));
        texts[lang] = { ...data, html: md.render(content || "") };
      }
      // Картинка з папки товару ("cover.jpg") → повна адреса на сайті
      const asset = (f) => (!f ? null : /^(https?:)?\//.test(f) ? f : `/content/${kind}/${d.name}/${f}`);
      return { slug: d.name, ...meta, cover: asset(meta.cover), images: (meta.images || []).map(asset), texts };
    });
}

const series = readEntries("series", "series.yml")
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
const seriesBySlug = Object.fromEntries(series.map((s) => [s.slug, s]));

const products = readEntries("products", "product.yml")
  .filter((p) => !p.draft)
  .map((p) => ({
    ...p,
    status: p.status || "available",
    editions: p.editions || [],
    url: (lang) => `/${lang}/shop/${p.series}/${p.slug}/`,
  }))
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99) || a.slug.localeCompare(b.slug));

const posts = readEntries("ideas", "post.yml")
  .filter((p) => !p.draft)
  .map((p) => ({ ...p, date: p.date ? new Date(p.date) : new Date(0), url: (lang) => `/${lang}/ideas/${p.slug}/` }))
  .sort((a, b) => b.date - a.date);

for (const p of products) {
  if (!seriesBySlug[p.series]) throw new Error(`Товар "${p.slug}": невідома серія "${p.series}" у product.yml`);
}

// Текст серії мовою сторінки, або мовою за замовчуванням, або перший наявний
const seriesText = (s, lang) => s.texts[lang] || s.texts[site.defaultLang] || Object.values(s.texts)[0] || { title: s.slug };

const alternatesOf = (item) => LANGS.filter((l) => item.texts[l]).map((l) => ({ lang: l, url: item.url(l) }));

// Короткі картки для списків
const productCard = (p, lang) => ({
  slug: p.slug, url: p.url(lang), cover: p.cover, color: p.color || seriesBySlug[p.series].color,
  type: p.type, status: p.status, ages: p.ages, series: p.series,
  seriesTitle: seriesText(seriesBySlug[p.series], lang).title,
  title: p.texts[lang].title, tagline: p.texts[lang].tagline,
  editionLangs: [...new Set(p.editions.map((e) => e.lang).filter(Boolean))],
});
const postCard = (p, lang) => ({
  slug: p.slug, url: p.url(lang), date: p.date, cover: p.cover, series: p.series,
  title: p.texts[lang].title, summary: p.texts[lang].summary,
});

const productsIn = (lang) => products.filter((p) => p.texts[lang]);
const postsIn = (lang) => posts.filter((p) => p.texts[lang]);

export default {
  languages: LANGS,
  series,

  // /{lang}/  /{lang}/shop/  /{lang}/ideas/
  langPages: LANGS.map((lang) => ({
    lang,
    series: series.map((s) => ({
      slug: s.slug, color: s.color, url: `/${lang}/shop/${s.slug}/`,
      ...seriesText(s, lang),
      count: productsIn(lang).filter((p) => p.series === s.slug).length,
    })),
    products: productsIn(lang).map((p) => productCard(p, lang)),
    featured: productsIn(lang).filter((p) => p.featured).map((p) => productCard(p, lang)),
    posts: postsIn(lang).map((p) => postCard(p, lang)),
    altHome: LANGS.map((l) => ({ lang: l, url: `/${l}/` })),
    altShop: LANGS.map((l) => ({ lang: l, url: `/${l}/shop/` })),
    altIdeas: LANGS.map((l) => ({ lang: l, url: `/${l}/ideas/` })),
  })),

  // /{lang}/shop/{series}/
  seriesPages: LANGS.flatMap((lang) => series.map((s) => ({
    lang, slug: s.slug, color: s.color,
    t: seriesText(s, lang),
    url: `/${lang}/shop/${s.slug}/`,
    products: productsIn(lang).filter((p) => p.series === s.slug).map((p) => productCard(p, lang)),
    posts: postsIn(lang).filter((p) => p.series === s.slug).slice(0, 4).map((p) => postCard(p, lang)),
    alternates: LANGS.map((l) => ({ lang: l, url: `/${l}/shop/${s.slug}/` })),
  }))),

  // /{lang}/shop/{series}/{product}/
  productPages: products.flatMap((p) => LANGS.filter((l) => p.texts[l]).map((lang) => ({
    lang, product: p, t: p.texts[lang], url: p.url(lang),
    seriesT: seriesText(seriesBySlug[p.series], lang),
    seriesUrl: `/${lang}/shop/${p.series}/`,
    color: p.color || seriesBySlug[p.series].color,
    editionLangs: [...new Set(p.editions.map((e) => e.lang).filter(Boolean))],
    gameUrl: p.game ? site.games[p.game] : null,
    more: productsIn(lang).filter((o) => o.series === p.series && o.slug !== p.slug).slice(0, 3).map((o) => productCard(o, lang)),
    ideas: postsIn(lang).filter((o) => o.product === p.slug || o.series === p.series).slice(0, 3).map((o) => postCard(o, lang)),
    alternates: alternatesOf(p),
  }))),

  // /{lang}/ideas/{post}/
  postPages: posts.flatMap((p) => LANGS.filter((l) => p.texts[l]).map((lang) => {
    const prod = p.product && products.find((x) => x.slug === p.product && x.texts[lang]);
    return {
      lang, post: p, t: p.texts[lang], url: p.url(lang),
      product: prod ? productCard(prod, lang) : null,
      gameUrl: p.game ? site.games[p.game] : null,
      alternates: alternatesOf(p),
    };
  })),

  // Усі адреси для sitemap.xml
  allUrls: [
    ...LANGS.flatMap((l) => [`/${l}/`, `/${l}/shop/`, `/${l}/ideas/`]),
    ...LANGS.flatMap((l) => series.map((s) => `/${l}/shop/${s.slug}/`)),
    ...products.flatMap((p) => alternatesOf(p).map((a) => a.url)),
    ...posts.flatMap((p) => alternatesOf(p).map((a) => a.url)),
  ],
};
