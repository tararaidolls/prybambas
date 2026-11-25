// Prybambas Offline — малює плакат для зони очікування як SVG.
//
// Один і той самий код працює:
//   • у браузері (конструктор на /<мова>/offline/ — живий попередній перегляд),
//   • у Node (scripts/offline/print.mjs — файл PNG 300 dpi для друку в Gelato).
//
// Функція не має залежностей: QR-коди малює переданий `qrcode` (бібліотека qrcode-generator).
//
// renderPoster({
//   poster,  // базовий плакат: { palette, title, subtitle, games_title, tasks_title, footer, answers_title }
//   games,   // до 3 ігор:   [{ title, desc, url, iconSvg }]
//   tasks,   // до 4 завдань: [{ kind: question|riddle|challenge|maze, label, text, answer, seed }]
//   venue,   // заклад: { name, logo (data: URL), slug }
//   size,    // { w, h } у мм (напр. A2 → 420 × 594)
//   bleed,   // мм запасу під обріз з кожного боку (0, якщо друкарня не просить)
//   qrcode,  // функція qrcode-generator
// }) → рядок SVG

export const W = 1000; // ширина макета в «одиницях»; висота залежить від пропорцій формату

export const PALETTES = {
  yellow: { accent: "#FFE800", soft: "#FFF9C2", deep: "#1A1A2E", grid: "#E9E3A8" },
  blue:   { accent: "#0078BF", soft: "#DDF0FB", deep: "#0B4F7D", grid: "#C9DFF0" },
  pink:   { accent: "#FF48B0", soft: "#FFE3F2", deep: "#B0186E", grid: "#F4CDE2" },
};
const INK = "#1A1A2E";
const INK_SOFT = "#4A4D66";
const PAPER = "#FBFCFE";

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Приблизна ширина символу для Geologica / Caveat (SVG сам не переносить рядки)
const CHAR = { main: 0.56, hand: 0.42 };
export function wrap(text, size, maxWidth, maxLines = 99, font = "main") {
  const lines = [];
  for (const para of String(text || "").split(/\n/)) {
    const words = para.split(/\s+/).filter(Boolean);
    let cur = "";
    const width = (s) => [...s].length * size * CHAR[font];
    for (const w of words) {
      const next = cur ? `${cur} ${w}` : w;
      if (width(next) > maxWidth && cur) { lines.push(cur); cur = w; } else cur = next;
    }
    if (cur) lines.push(cur);
  }
  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = kept[maxLines - 1].replace(/[\s,.;:–-]*$/, "") + "…";
    return kept;
  }
  return lines;
}

// Найбільший шрифт, з яким текст влазить у прямокутник
function fitText(text, maxWidth, maxHeight, { max = 40, min = 16, lh = 1.25, font = "main" } = {}) {
  for (let size = max; size >= min; size -= 1) {
    const lines = wrap(text, size, maxWidth, 99, font);
    if (lines.length * size * lh <= maxHeight) return { size, lines };
  }
  const lines = wrap(text, min, maxWidth, Math.max(1, Math.floor(maxHeight / (min * lh))), font);
  return { size: min, lines };
}

function textBlock(lines, x, y, size, { lh = 1.25, weight = 400, fill = INK, family = "Geologica", anchor = "start" } = {}) {
  return lines.map((l, i) =>
    `<text x="${x}" y="${(y + size + i * size * lh).toFixed(1)}" font-family="${family}" font-weight="${weight}" font-size="${size}" fill="${fill}" text-anchor="${anchor}">${esc(l)}</text>`
  ).join("");
}

// QR-код як один path (квадратики модулів); size — сторона з полями
function qrSvg(qrcode, url, x, y, size) {
  if (!qrcode) return `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="#fff" stroke="${INK}"/>`;
  const qr = qrcode(0, "M");
  qr.addData(url);
  qr.make();
  const n = qr.getModuleCount();
  const quiet = 2;
  const cell = size / (n + quiet * 2);
  let d = "";
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
    if (qr.isDark(r, c)) d += `M${(x + (c + quiet) * cell).toFixed(2)} ${(y + (r + quiet) * cell).toFixed(2)}h${cell.toFixed(2)}v${cell.toFixed(2)}h-${cell.toFixed(2)}z`;
  }
  return `<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="10" fill="#fff"/><path d="${d}" fill="${INK}" shape-rendering="crispEdges"/>`;
}

// Детермінований генератор випадкових чисел, щоб той самий seed давав той самий лабіринт
function rng(seed) {
  let s = (Number(seed) || 1) >>> 0;
  return () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// Лабіринт (DFS) розміром n×n клітинок у квадраті side; вхід зліва вгорі, вихід справа внизу
function mazeSvg(seed, n, x, y, side, color) {
  const rand = rng(seed);
  const cell = side / n;
  const walls = Array.from({ length: n * n }, () => ({ r: true, b: true }));
  const seen = new Uint8Array(n * n);
  const stack = [0];
  seen[0] = 1;
  while (stack.length) {
    const cur = stack[stack.length - 1];
    const cx = cur % n, cy = Math.floor(cur / n);
    const nb = [];
    if (cx > 0 && !seen[cur - 1]) nb.push([cur - 1, "l"]);
    if (cx < n - 1 && !seen[cur + 1]) nb.push([cur + 1, "r"]);
    if (cy > 0 && !seen[cur - n]) nb.push([cur - n, "u"]);
    if (cy < n - 1 && !seen[cur + n]) nb.push([cur + n, "d"]);
    if (!nb.length) { stack.pop(); continue; }
    const [next, dir] = nb[Math.floor(rand() * nb.length)];
    if (dir === "r") walls[cur].r = false;
    if (dir === "l") walls[next].r = false;
    if (dir === "d") walls[cur].b = false;
    if (dir === "u") walls[next].b = false;
    seen[next] = 1;
    stack.push(next);
  }
  let d = `M${x + cell} ${y}H${x + side}V${y + side - cell}M${x + side - cell} ${y + side}H${x}V${y}`;
  for (let i = 0; i < n * n; i++) {
    const cx = i % n, cy = Math.floor(i / n);
    const px = x + cx * cell, py = y + cy * cell;
    if (walls[i].r && cx < n - 1) d += `M${(px + cell).toFixed(1)} ${py.toFixed(1)}v${cell.toFixed(1)}`;
    if (walls[i].b && cy < n - 1) d += `M${px.toFixed(1)} ${(py + cell).toFixed(1)}h${cell.toFixed(1)}`;
  }
  const r = cell * 0.28;
  return `<path d="${d}" stroke="${INK}" stroke-width="${Math.max(2, cell * 0.12).toFixed(1)}" stroke-linecap="round" fill="none"/>
    <circle cx="${x + cell / 2}" cy="${y + cell / 2}" r="${r}" fill="${color}"/>
    <path d="M${x + side - cell / 2 - r} ${y + side - cell / 2}h${r * 2}M${x + side - cell / 2} ${y + side - cell / 2 - r}v${r * 2}" stroke="${color}" stroke-width="${r * 0.7}" stroke-linecap="round"/>`;
}

// Знак Prybambas (лупа)
const mark = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><circle cx="19" cy="14" r="9" fill="#FFE800"/><circle cx="14" cy="14" r="9" fill="none" stroke="${INK}" stroke-width="2.6"/><path d="M20.5 20.5 L29 29" stroke="${INK}" stroke-width="3" stroke-linecap="round"/></g>`;

// Чорнильна іконка гри (100×100) у потрібному місці
function icon(svg, x, y, size) {
  if (!svg) return "";
  const str = String(svg);
  // атрибути кореневого <svg> (напр. fill="none") переносимо на групу, інакше фігури заллються чорним
  const root = (str.match(/<svg([^>]*)>/) || [, ""])[1];
  const attrs = [...root.matchAll(/\s(fill|stroke|stroke-width|stroke-linecap|stroke-linejoin)="([^"]*)"/g)].map((m) => ` ${m[1]}="${m[2]}"`).join("");
  const inner = str.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
  return `<g transform="translate(${x} ${y}) scale(${size / 100})"${attrs}>${inner}</g>`;
}

// Кольорова «плашка-скотч»
const tape = (x, y, w, color, rot = -3) =>
  `<rect x="${x}" y="${y}" width="${w}" height="26" fill="${color}" opacity="0.8" transform="rotate(${rot} ${x + w / 2} ${y + 13})"/>`;

const KIND_ICON = {
  question: (x, y, c) => `<circle cx="${x}" cy="${y}" r="20" fill="${c}"/><text x="${x}" y="${y + 9}" text-anchor="middle" font-family="Geologica" font-weight="800" font-size="26" fill="${INK}">?</text>`,
  riddle: (x, y, c) => `<circle cx="${x}" cy="${y}" r="20" fill="${c}"/><path d="M${x - 8} ${y + 2}a8 8 0 1 1 8 8v5M${x} ${y + 15}v0" stroke="${INK}" stroke-width="3.4" stroke-linecap="round" fill="none" transform="translate(0 -9)"/>`,
  challenge: (x, y, c) => `<circle cx="${x}" cy="${y}" r="20" fill="${c}"/><path d="M${x} ${y - 11}a8 8 0 0 1 5 14v3h-10v-3a8 8 0 0 1 5-14zM${x - 4} ${y + 11}h8" stroke="${INK}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,
  maze: (x, y, c) => `<circle cx="${x}" cy="${y}" r="20" fill="${c}"/><path d="M${x - 10} ${y - 10}h20v20h-14v-12h8v6" stroke="${INK}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`,
};

export function posterHeight(size) {
  return Math.round(W * (size.h / size.w));
}

export function renderPoster({ poster, games = [], tasks = [], venue = {}, size = { w: 420, h: 594 }, bleed = 0, qrcode }) {
  const H = posterHeight(size);
  const P = PALETTES[poster.palette] || PALETTES.yellow;
  const M = 56; // поля
  const B = bleed ? (bleed / size.w) * W : 0; // запас під обріз в одиницях макета
  const out = [];

  // Тло: папір у клітинку + кольорові плями
  const grid = [];
  for (let x = -B; x <= W + B; x += 40) grid.push(`M${x} ${-B}V${H + B}`);
  for (let y = -B; y <= H + B; y += 40) grid.push(`M${-B} ${y}H${W + B}`);
  out.push(`<rect x="${-B}" y="${-B}" width="${W + 2 * B}" height="${H + 2 * B}" fill="${PAPER}"/>`);
  out.push(`<path d="${grid.join("")}" stroke="${P.grid}" stroke-width="1.4" opacity="0.7"/>`);
  out.push(`<circle cx="${W - 40}" cy="70" r="230" fill="${P.accent}" opacity="0.22"/>`);
  out.push(`<circle cx="30" cy="${H - 120}" r="170" fill="${P.accent}" opacity="0.16"/>`);
  out.push(`<rect x="${-B}" y="${-B}" width="${22 + B}" height="${H + 2 * B}" fill="${P.accent}"/><rect x="22" y="${-B}" width="3" height="${H + 2 * B}" fill="${INK}"/>`);

  // Шапка: логотип закладу + назва
  let y = 50;
  const logoBox = { w: 300, h: 110 };
  if (venue.logo) {
    out.push(`<image href="${esc(venue.logo)}" x="${M}" y="${y}" width="${logoBox.w}" height="${logoBox.h}" preserveAspectRatio="xMinYMid meet"/>`);
    if (venue.name) out.push(textBlock(wrap(venue.name, 26, W - M * 2 - logoBox.w - 40, 2), M + logoBox.w + 24, y + 34, 26, { weight: 600, fill: INK_SOFT }));
  } else if (venue.name) {
    out.push(textBlock(wrap(venue.name, 40, W - M * 2 - 80, 2), M, y + 20, 40, { weight: 800 }));
  }
  y += logoBox.h + 28;

  // Заголовок плаката
  let tSize = 76;
  let tLines = wrap(poster.title, tSize, W - M * 2, 2);
  if (tLines.length > 1) { tSize = 64; tLines = wrap(poster.title, tSize, W - M * 2, 2); }
  out.push(textBlock(tLines, M, y, tSize, { weight: 800, lh: 1.05 }));
  y += tLines.length * tSize * 1.05 + 8;
  if (poster.subtitle) {
    const sLines = wrap(poster.subtitle, 46, W - M * 2, 2, "hand");
    out.push(textBlock(sLines, M, y, 46, { family: "Caveat", weight: 700, fill: P.deep, lh: 1.1 }));
    y += sLines.length * 46 * 1.1;
  }
  y += 24;

  const footerH = 120;
  const answers = tasks.filter((t) => t.kind === "riddle" && t.answer);
  const answersH = answers.length ? 70 : 0;
  const bottom = H - footerH - answersH;

  // Розподіл висоти між іграми з QR і друкованими завданнями
  const gameCount = games.length;
  const cols = tasks.length <= 1 ? 1 : 2;
  const rows = Math.ceil(tasks.length / cols);
  const titleH = 62, between = gameCount && tasks.length ? 36 : 0, gapT = 20;
  const gGap = 24;
  const gcw = gameCount ? (W - M * 2 - gGap * (gameCount - 1)) / gameCount : 0;
  const gExtra = gameCount === 1 ? 48 : 190; // місце під назву й опис гри
  const avail = bottom - y - (gameCount ? titleH : 0) - (tasks.length ? titleH : 0) - between;
  const minTaskH = 190;
  const qrMax = Math.min(gameCount === 1 ? 300 : gameCount === 2 ? 260 : 220, gcw - 48);
  const qrSize = gameCount ? Math.max(150, Math.min(qrMax, avail - (rows ? rows * minTaskH + (rows - 1) * gapT : 0) - gExtra)) : 0;
  const gch = gameCount ? qrSize + (gameCount === 1 ? 48 : gExtra) : 0;
  const taskH = rows ? Math.min(330, (avail - gch - (rows - 1) * gapT) / rows) : 0;

  const sectionTitle = (text, ty, color) => {
    out.push(tape(M - 6, ty + 6, Math.min(W - M * 2, [...text].length * 20 + 40), color, -2));
    out.push(`<text x="${M + 8}" y="${ty + 30}" font-family="Geologica" font-weight="800" font-size="30" fill="${INK}">${esc(text)}</text>`);
  };
  if (gameCount) {
    sectionTitle(poster.games_title, y, P.accent);
    y += titleH;
    const cw = gcw, ch = gch;
    games.forEach((g, i) => {
      const x = M + i * (cw + gGap);
      out.push(`<rect x="${x}" y="${y}" width="${cw}" height="${ch}" rx="18" fill="#fff" stroke="${INK}" stroke-width="3"/>`);
      if (gameCount === 1) {
        out.push(qrSvg(qrcode, g.url, x + 24, y + 24, qrSize));
        const tx = x + qrSize + 60;
        out.push(icon(g.iconSvg, tx, y + 20, 90));
        out.push(textBlock(wrap(g.title, 38, cw - qrSize - 90, 2), tx, y + 120, 38, { weight: 800, lh: 1.1 }));
        out.push(textBlock(wrap(g.desc, 26, cw - qrSize - 90, 4), tx, y + 220, 26, { fill: INK_SOFT }));
      } else {
        out.push(qrSvg(qrcode, g.url, x + (cw - qrSize) / 2, y + 20, qrSize));
        const ty = y + qrSize + 30;
        out.push(icon(g.iconSvg, x + 18, ty - 4, 54));
        out.push(textBlock(wrap(g.title, 26, cw - 96, 2), x + 80, ty, 26, { weight: 800, lh: 1.1 }));
        out.push(textBlock(wrap(g.desc, 19, cw - 36, 3), x + 18, ty + 66, 19, { fill: INK_SOFT }));
      }
    });
    y += ch + between;
  }

  // Друковані завдання: сітка 1–2 колонки
  if (tasks.length) {
    sectionTitle(poster.tasks_title, y, P.soft === "#FFF9C2" ? "#FF48B0" : P.accent);
    y += titleH;
    const cw = (W - M * 2 - gapT * (cols - 1)) / cols;
    const ch = taskH;
    const mazeColor = P.soft === "#FFF9C2" ? "#FF48B0" : P.accent;
    tasks.forEach((t, i) => {
      const x = M + (i % cols) * (cw + gapT);
      const ty = y + Math.floor(i / cols) * (ch + gapT);
      out.push(`<rect x="${x}" y="${ty}" width="${cw}" height="${ch}" rx="18" fill="${P.soft}" stroke="${INK}" stroke-width="2.4"/>`);
      out.push((KIND_ICON[t.kind] || KIND_ICON.question)(x + 40, ty + 40, P.soft === "#FFF9C2" ? P.accent : "#fff"));
      out.push(`<text x="${x + 72}" y="${ty + 50}" font-family="Caveat" font-weight="700" font-size="32" fill="${P.deep}">${esc(t.label)}</text>`);
      if (t.kind === "maze") {
        // Лабіринт праворуч, підказка ліворуч
        const side = Math.min(ch - 28, cw * 0.55);
        const mx = x + cw - side - 14;
        out.push(mazeSvg(t.seed, Math.max(6, Math.round(side / 24)), mx, ty + 14, side, mazeColor));
        if (t.text) {
          const f = fitText(t.text, cw - side - 60, ch - 92, { max: 26, min: 16 });
          out.push(textBlock(f.lines, x + 26, ty + 70, f.size));
        }
      } else {
        const f = fitText(t.text, cw - 50, ch - 88, { max: cols === 1 ? 40 : 32, min: 16 });
        out.push(textBlock(f.lines, x + 26, ty + 68, f.size, { lh: 1.25 }));
      }
    });
    y += rows * ch + (rows - 1) * gapT;
  }

  // Відповіді на загадки — догори дриґом
  if (answers.length) {
    const txt = `${poster.answers_title}: ` + answers.map((a, i) => `${i + 1}) ${a.answer}`).join("   ");
    const ay = H - footerH - 22;
    out.push(`<text transform="rotate(180 ${W / 2} ${ay})" x="${W / 2}" y="${ay}" text-anchor="middle" font-family="Geologica" font-size="20" fill="${INK_SOFT}">${esc(txt)}</text>`);
  }

  // Підвал
  const fy = H - footerH + 20;
  out.push(`<path d="M${M} ${fy}H${W - M}" stroke="${INK}" stroke-width="2" stroke-dasharray="2 8" stroke-linecap="round"/>`);
  out.push(mark(M, fy + 26, 1.4));
  out.push(`<text x="${M + 54}" y="${fy + 56}" font-family="Geologica" font-weight="800" font-size="30" fill="${INK}">prybambas.com</text>`);
  out.push(textBlock(wrap(poster.footer, 20, W - M * 2 - 330, 2), W - M, fy + 26, 20, { fill: INK_SOFT, anchor: "end" }));

  const vb = `${-B} ${-B} ${W + 2 * B} ${H + 2 * B}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="${W + 2 * B}" height="${H + 2 * B}">${out.join("\n")}</svg>`;
}

// Адреса для QR-коду: мовна сторінка гри + мітка закладу (видно в статистиці Umami)
export function gameQrUrl(siteUrl, path, venueSlug) {
  const u = new URL(path, siteUrl);
  u.searchParams.set("utm_source", "poster");
  if (venueSlug) u.searchParams.set("utm_campaign", venueSlug);
  return u.href;
}

export function slugify(s) {
  const map = { а:"a",б:"b",в:"v",г:"h",ґ:"g",д:"d",е:"e",є:"ye",ж:"zh",з:"z",и:"y",і:"i",ї:"yi",й:"y",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",х:"kh",ц:"ts",ч:"ch",ш:"sh",щ:"shch",ь:"",ю:"yu",я:"ya" };
  return String(s || "").toLowerCase().replace(/[а-яґєії]/g, (c) => map[c] ?? c)
    .normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/[\s_]+/g, "-").replace(/-+/g, "-").slice(0, 40);
}
