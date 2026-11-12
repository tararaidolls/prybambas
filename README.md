# Prybambas

Free STEM education hub for curious kids ages 5–14, plus tools for parents of little ones 0–4.

## What it is

Prybambas (https://prybambas.com) is a free web app and PWA with these spaces:

| Section | Description |
|---------|-------------|
| **What If?** | Logic and cause-and-effect game — single round, logic chain, deduction |
| **Inventor Lab** | TRIZ-inspired thinking — tools, 30-day calendar, design challenges, missions |
| **AI Coach** | Language practice companion |
| **For the Littlest** (`/little/`) | Tools for parents of 0–4s: 100 First Foods & Allergen Tracker |

## Who is it for?

- Kids who ask "why?" and "what if?"
- Parents looking for screen time that sparks discussion
- Homeschoolers and teachers (STEM, logic, creative thinking)
- Multilingual families

## Tech

- Games: static HTML + PWA, translations in `what-if/content/`, `inventor/content/`
- For the Littlest: `little/index.html` (hub, 7 languages) and `little/first-foods/index.html`
  (the tracker: one self-contained file with fonts inside; data stays in the visitor's browser
  or in their own `.prybambas.json` family file). `sw.js` serves `/little/` network-first,
  with an offline fallback, so updates reach parents straight away.
- Shop & ideas: built with [Eleventy](https://www.11ty.dev/) from `content/`
  (templates in `src/`, styles in `assets/`). See **CONTENT.md** for how to add products and posts.
- Deployed by GitHub Actions to GitHub Pages → prybambas.com

## Related books (Kids Skill Academy)

- *Think Like an Inventor* (TRIZ series)
- *What If?* (logic chain books)
- *One Verb a Day* (language learning workbooks)

## License

Educational content by Kids Skill Academy. Free to use in browser.
