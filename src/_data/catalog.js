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
import { loadShops, resolveListings, buyEditions } from "../../scripts/catalog/model.mjs";

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

// Ігри: content/games/<slug>/game.yml + icon.svg + <мова>.md (усі мови ігор, site.gameLanguages)
const GAME_LANGS = (site.gameLanguages || []).map((l) => l.code);
const games = (() => {
  const dir = path.join(ROOT, "games");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
    .map((d) => {
      const folder = path.join(dir, d.name);
      const meta = yaml.load(fs.readFileSync(path.join(folder, "game.yml"), "utf8")) || {};
      const icon = meta.icon && fs.existsSync(path.join(folder, meta.icon)) ? fs.readFileSync(path.join(folder, meta.icon), "utf8").trim() : "";
      const texts = {};
      for (const lang of GAME_LANGS) {
        const file = path.join(folder, `${lang}.md`);
        if (fs.existsSync(file)) texts[lang] = matter(fs.readFileSync(file, "utf8")).data;
      }
      return { slug: d.name, ...meta, iconSvg: icon, texts };
    })
    .filter((g) => !g.draft)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
})();
// Мовні адреси ігор: /<мова>/<гра>/ — копія сторінки гри, що відкривається цією мовою
const gameLangs = (g) => (g.localized ? (g.langs || GAME_LANGS) : []);
const gameLangUrl = (g, lang) => `/${lang}/${g.slug}/`;
const gameLangPages = games.flatMap((g) => gameLangs(g).map((lang) => ({
  slug: g.slug, lang, file: g.file, base: g.url, url: gameLangUrl(g, lang),
  title: (g.texts[lang] || g.texts.en || {}).title, desc: (g.texts[lang] || g.texts.en || {}).desc,
  rtl: (site.gameLanguages || []).some((l) => l.code === lang && l.rtl),
  alternates: [...gameLangs(g).map((l) => ({ lang: l, url: gameLangUrl(g, l) })), { lang: "x-default", url: g.url }],
})));

// Текст гри мовою, або англійською
const gameText = (g, lang) => g.texts[lang] || g.texts[site.defaultLang] || Object.values(g.texts)[0] || { title: g.slug };
const gameCards = (lang) => games.map((g) => ({ slug: g.slug, url: gameLangs(g).includes(lang) ? gameLangUrl(g, lang) : g.url, baseUrl: g.url, langs: gameLangs(g), skill: g.skill, ages: g.ages, tape: g.tape, spot: g.spot, tilt: g.tilt, tapeOpacity: g.tapeOpacity, iconSvg: g.iconSvg, ...gameText(g, lang) }));
// slug гри → адреса (для кнопки «Спробуй онлайн» на сторінках товарів); site.games — додаткові адреси
const gameUrls = { ...(site.games || {}), ...Object.fromEntries(games.map((g) => [g.slug, g.url])) };

const series = readEntries("series", "series.yml")
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
const seriesBySlug = Object.fromEntries(series.map((s) => [s.slug, s]));

const shops = loadShops();
const products = readEntries("products", "product.yml")
  .filter((p) => !p.draft && p.site !== false)   // site: false — є в каталозі, але не на сайті
  .map((p) => ({
    ...p,
    status: p.status || "available",
    // Кнопки купівлі збираються з оголошень (listings) + знімків магазинів
    editions: buyEditions(p, resolveListings(p, shops), site),
    // Пропозиції для розмітки Google (schema.org Offer): лише оголошення з ціною й посиланням
    offers: resolveListings(p, shops)
      .filter((l) => l.price > 0 && l.currency && !["removed", "missing"].includes(l.status))
      // для Etsy відомий лише пошук у магазині, тож пряму адресу не вказуємо (для Google вона необовʼязкова)
      .map((l) => ({ price: Number(l.price).toFixed(2), currency: l.currency, url: l.urlKind === "search" ? undefined : l.url, preorder: l.status === "preorder", platform: l.platform })),
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
  type: p.type, status: p.status, ages: p.ages, series: p.series, skills: skillsOf(p),
  ageRange: rangeOf(p),
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

// ---------- Вік і навички ----------
// "6-12" → [6,12]; "10+" → [10,99]; "6-12 months" → [0,1]; adult → null (не потрапляє в дитячі добірки)
const ageRange = (a) => {
  if (a == null || a === "") return null;
  const str = String(a).trim().toLowerCase();
  if (str === "adult") return null;
  const m = str.match(/^(\d+)\s*(?:-|–)\s*(\d+)\s*(months?)?/);
  if (m) return m[3] ? [0, Math.ceil(+m[2] / 12)] : [+m[1], +m[2]];
  const plus = str.match(/^(\d+)\s*\+/);
  if (plus) return [+plus[1], 99];
  return null;
};
const inGroup = (range, g) => range && range[0] <= g.max && range[1] >= g.min;
const seriesOf = (slug) => seriesBySlug[slug] || {};
const skillsOf = (item) => item.skills || seriesOf(item.series).skills || [];
const rangeOf = (item) => ageRange(item.ages ?? seriesOf(item.series).ages);
const SKILLS = site.skills || [];
const AGE_GROUPS = site.ageGroups || [];

export default {
  languages: LANGS,
  series,
  games,
  gameCards,
  gameLangPages,
  // Дані для головної «/» (перемикання мови без перезавантаження): ігри 15 мовами, ідеї й товари мовами магазину
  homeTeasers: Object.fromEntries(LANGS.map((lang) => [lang, {
    posts: postsIn(lang).slice(0, 3).map((p) => { const c = postCard(p, lang); return { url: c.url, title: c.title, date: c.date }; }),
    products: (productsIn(lang).filter((p) => p.featured).length ? productsIn(lang).filter((p) => p.featured) : productsIn(lang))
      .slice(0, 4).map((p) => { const c = productCard(p, lang); return { url: c.url, title: c.title, tagline: c.tagline, series: c.seriesTitle }; }),
  }])),
  homeData: Object.fromEntries(GAME_LANGS.map((lang) => [lang, { games: gameCards(lang).map(({ iconSvg, ...g }) => g) }])),

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
    gameUrl: p.game ? gameUrls[p.game] : null,
    skills: skillsOf(p).filter((k) => (site.skills || []).some((x) => x.key === k)),
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
      gameUrl: p.game ? gameUrls[p.game] : null,
      alternates: alternatesOf(p),
    };
  })),

  skills: SKILLS,
  ageGroups: AGE_GROUPS,

  // /{lang}/skills/{skill}/ і /{lang}/ages/{group}/ — ігри, ідеї й товари за навичкою чи віком
  collectionPages: LANGS.flatMap((lang) => [
    ...SKILLS.map((sk) => ({ kind: "skill", key: sk.key, color: sk.color, match: (x) => skillsOf(x).includes(sk.key) })),
    ...AGE_GROUPS.map((g) => ({ kind: "age", key: g.key, color: "yellow", match: (x) => inGroup(rangeOf(x), g) })),
  ].map((c) => ({
    lang, kind: c.kind, key: c.key, color: c.color,
    url: `/${lang}/${c.kind === "skill" ? "skills" : "ages"}/${c.key}/`,
    games: gameCards(lang).filter((g) => c.match(games.find((x) => x.slug === g.slug))),
    products: productsIn(lang).filter(c.match).map((p) => productCard(p, lang)),
    posts: postsIn(lang).filter(c.match).map((p) => postCard(p, lang)),
    alternates: LANGS.map((l) => ({ lang: l, url: `/${l}/${c.kind === "skill" ? "skills" : "ages"}/${c.key}/` })),
  }))),

  // Усі адреси для sitemap.xml
  allUrls: [
    ...LANGS.flatMap((l) => [`/${l}/`, `/${l}/shop/`, `/${l}/ideas/`]),
    ...LANGS.flatMap((l) => series.map((s) => `/${l}/shop/${s.slug}/`)),
    ...gameLangPages.map((p) => p.url),
    ...LANGS.flatMap((l) => [...SKILLS.map((k) => `/${l}/skills/${k.key}/`), ...AGE_GROUPS.map((g) => `/${l}/ages/${g.key}/`)]),
    ...products.flatMap((p) => alternatesOf(p).map((a) => a.url)),
    ...posts.flatMap((p) => alternatesOf(p).map((a) => a.url)),
  ],
};
