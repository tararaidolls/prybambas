// Дані для Prybambas Offline (конструктор плакатів для зон очікування).
//
//   content/offline/offline.yml                       — формати, ліміти, форма заявки
//   content/offline/i18n.yml                          — тексти сторінки й плаката (uk, en)
//   content/offline/posters/<slug>/poster.yml + <мова>.md — базові плакати
//   content/offline/tasks/<slug>/task.yml + <мова>.md     — друковані завдання
//   ігри — з content/games/ (список у offline.yml → games)
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import matter from "gray-matter";
import catalog from "./catalog.js";

const ROOT = path.resolve("content/offline");
const settings = yaml.load(fs.readFileSync(path.join(ROOT, "offline.yml"), "utf8"));
const i18n = yaml.load(fs.readFileSync(path.join(ROOT, "i18n.yml"), "utf8"));
const LANGS = Object.keys(i18n);

function read(kind, metaFile) {
  const dir = path.join(ROOT, kind);
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith("_"))
    .map((d) => {
      const folder = path.join(dir, d.name);
      const meta = yaml.load(fs.readFileSync(path.join(folder, metaFile), "utf8")) || {};
      const texts = {};
      for (const lang of LANGS) {
        const f = path.join(folder, `${lang}.md`);
        if (fs.existsSync(f)) texts[lang] = matter(fs.readFileSync(f, "utf8")).data;
      }
      return { slug: d.name, ...meta, texts };
    })
    .filter((x) => !x.draft)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

const posters = read("posters", "poster.yml");
const tasks = read("tasks", "task.yml");
const games = (settings.games || []).map((slug) => catalog.games.find((g) => g.slug === slug)).filter(Boolean);
const gameUrl = (g, lang) => (g.localized && (g.langs || [lang]).includes(lang) ? `/${lang}/${g.slug}/` : g.url);

// Усе, що потрібно конструктору в браузері, однією мовою
const forLang = (lang) => ({
  lang,
  t: i18n[lang],
  sizes: settings.sizes,
  defaultSize: settings.defaultSize,
  bleed: settings.bleed || 0,
  maxGames: settings.maxGames,
  maxTasks: settings.maxTasks,
  request: settings.request || {},
  posters: posters.filter((p) => p.texts[lang]).map((p) => ({ slug: p.slug, palette: p.palette, for: p.for || [], ...p.texts[lang] })),
  tasks: tasks.filter((t) => t.texts[lang]).map((t) => ({ slug: t.slug, kind: t.kind, seed: t.seed, ...t.texts[lang] })),
  games: games.map((g) => {
    const tx = g.texts[lang] || g.texts.en || {};
    return { slug: g.slug, title: tx.title, desc: tx.desc, path: gameUrl(g, lang), iconSvg: g.iconSvg };
  }),
});

export default {
  settings,
  langs: LANGS,
  pages: LANGS.map((lang) => ({
    lang,
    url: `/${lang}/offline/`,
    alternates: LANGS.map((l) => ({ lang: l, url: `/${l}/offline/` })),
    data: forLang(lang),
  })),
  all: Object.fromEntries(LANGS.map((l) => [l, forLang(l)])),
  forLang,
};
