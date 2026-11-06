/* Prybambas Play — рушій сторінок для QR з постерів.
   Сторінка задає <body data-poster="beaver|owl|health"> (або "index" для списку),
   тексти лежать у content.js (window.PLAY_UI, window.PLAY).

   Мова: 1) вибір, збережений раніше (prybambas_lang, спільний з іншими іграми),
         2) мова телефону/браузера, 3) англійська.
   Країну за IP навмисно не використовуємо: українська родина в Румунії
   чи Польщі має телефон українською, і саме її мова тут правильна. */
(function () {
  const LANGS = ['en', 'uk', 'ro', 'pl'];
  const KEY = 'prybambas_lang';
  const poster = document.body.dataset.poster;

  function detectLang() {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved && LANGS.includes(saved)) return saved;
    } catch (e) { /* приватний режим */ }
    const prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
    for (const l of prefs) {
      const base = String(l).toLowerCase().split('-')[0];
      if (base === 'ru' || base === 'be') continue;   // не підставляємо замість української автоматично
      if (LANGS.includes(base)) return base;
    }
    return 'en';
  }

  let lang = detectLang();
  let age = 0;
  try { const a = parseInt(sessionStorage.getItem('play_age'), 10); if (a >= 0 && a <= 2) age = a; } catch (e) {}

  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function renderIndex(ui) {
    const items = ['beaver', 'owl', 'health'].map((p) => {
      const d = (window.PLAY[p][lang] || window.PLAY[p].en);
      return `<a class="poster-link" href="./${p}/">
        <img src="./img/${p}.webp" alt="" width="72" height="102" loading="lazy">
        <div><b>${esc(d.title)}</b><span>${esc(d.where)}</span></div></a>`;
    }).join('');
    $('#app').innerHTML = `
      <div class="play-hero"><span class="hero-emoji">🎲</span>
        <h1>${esc(ui.indexTitle)}</h1><p>${esc(ui.indexIntro)}</p></div>
      <div class="poster-list">${items}</div>`;
  }

  function renderPoster(ui) {
    const d = window.PLAY[poster][lang] || window.PLAY[poster].en;
    const ageKeys = ['small', 'mid', 'big'];
    const tabs = ui.ages.map((a, i) => `
      <button class="age-tab a${i}" role="tab" aria-selected="${i === age}" data-age="${i}">
        <span class="ico">${a.icon}</span>${esc(a.label)}</button>`).join('');
    const games = (d.games[ageKeys[age]] || []).map((g, i) => `
      <div class="game">
        <h3><span class="ico">${g.icon}</span><span>${esc(g.title)}</span></h3>
        <p>${esc(g.text)}</p>
        ${g.answer ? `<button class="reveal-btn" data-i="${i}" aria-expanded="false">${esc(g.answerBtn || ui.show)}</button>
        <div class="answer" id="ans-${i}">${esc(g.answer)}</div>` : ''}
      </div>`).join('');
    const answers = d.answers.map((a) => `
      <div class="row"><span class="ico">${a.icon}</span><div><b>${esc(a.title)}</b>${esc(a.text)}</div></div>`).join('');

    $('#app').innerHTML = `
      <div class="play-hero"><span class="hero-emoji">${d.emoji}</span>
        <h1>${esc(d.title)}</h1><p>${esc(d.intro)}</p></div>
      <img class="play-poster" src="../img/${poster}.webp" alt="${esc(d.posterAlt)}" width="220" height="311">
      <div class="section-title">${esc(ui.chooseAge)}</div>
      <div class="age-tabs" role="tablist">${tabs}</div>
      <div class="games">${games}</div>
      <details class="poster-answers"><summary>${esc(ui.answersTitle)}</summary><div class="rows">${answers}</div></details>
      <div class="grownups"><b>${esc(ui.grownups)}</b> ${esc(d.tip)}</div>
      <a href="../../what-if/" class="promo-banner">
        <div class="promo-text"><h3>${esc(ui.promoTitle)}</h3><p>${esc(ui.promoText)}</p></div>
        <div class="promo-btn">${esc(ui.promoBtn)}</div></a>`;

    document.querySelectorAll('.age-tab').forEach((b) => b.addEventListener('click', () => {
      age = +b.dataset.age;
      try { sessionStorage.setItem('play_age', age); } catch (e) {}
      render();
      if (window.umami) umami.track('play-age', { poster, age: ui.ages[age].label });
    }));
    document.querySelectorAll('.reveal-btn').forEach((b) => b.addEventListener('click', () => {
      const box = document.getElementById('ans-' + b.dataset.i);
      const open = box.classList.toggle('open');
      b.setAttribute('aria-expanded', open);
      b.textContent = open ? ui.hide : (d.games[ageKeys[age]][b.dataset.i].answerBtn || ui.show);
    }));
  }

  function render() {
    const ui = window.PLAY_UI[lang] || window.PLAY_UI.en;
    document.documentElement.lang = lang;
    $('#btn-back').textContent = ui.back;
    if (poster === 'index') renderIndex(ui); else renderPoster(ui);
    const d = poster === 'index' ? null : (window.PLAY[poster][lang] || window.PLAY[poster].en);
    document.title = (d ? d.title : ui.indexTitle) + ' | Prybambas';
  }

  const sel = $('#lang-selector');
  sel.value = lang;
  sel.addEventListener('change', () => {
    lang = sel.value;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    render();
  });

  // Мітка клініки з QR (?c=...) — лише для аналітики, сторінка однакова для всіх
  const clinic = new URLSearchParams(location.search).get('c');
  if (clinic) {
    window.addEventListener('load', () => {
      if (window.umami) umami.track('play-clinic', { poster, clinic: clinic.slice(0, 60) });
    });
  }

  render();
})();
