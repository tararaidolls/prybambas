// Картинки-превʼю для соцмереж (1200×630) у стилі блокнота.
// Список сторінок бере з _site/og/manifest.json (його генерує src/og-manifest.njk),
// малює SVG і перетворює на PNG через resvg. Викликається після збірки Eleventy.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { Resvg } from "@resvg/resvg-js";

const require = createRequire(import.meta.url);
const font = (pkg, file) => path.join(path.dirname(require.resolve(`${pkg}/package.json`)), file);
const FONTS = [
  font("@expo-google-fonts/geologica", "400Regular/Geologica_400Regular.ttf"),
  font("@expo-google-fonts/geologica", "600SemiBold/Geologica_600SemiBold.ttf"),
  font("@expo-google-fonts/geologica", "800ExtraBold/Geologica_800ExtraBold.ttf"),
  font("@expo-google-fonts/caveat", "700Bold/Caveat_700Bold.ttf"),
];

const COLORS = {
  pink: { spine: "#FF48B0", bg: "#FFE3F2" },
  blue: { spine: "#0078BF", bg: "#DDF0FB" },
  yellow: { spine: "#FFE800", bg: "#FFF9C2" },
  ink: { spine: "#1A1A2E", bg: "#ECEDF3" },
};

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Перенос рядків за приблизною шириною символу
function wrap(text, size, maxWidth, maxLines) {
  const words = String(text || "").split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = "";
  const width = (s) => [...s].length * size * 0.56;
  for (const w of words) {
    const next = cur ? `${cur} ${w}` : w;
    if (width(next) > maxWidth && cur) { lines.push(cur); cur = w; } else cur = next;
  }
  if (cur) lines.push(cur);
  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = kept[maxLines - 1].replace(/[\s,.;:–-]*$/, "") + "…";
    return kept;
  }
  return lines;
}

function svg({ title, eyebrow, tagline, color = "blue", badge }) {
  const c = COLORS[color] || COLORS.blue;
  let titleSize = 76;
  let titleLines = wrap(title, titleSize, 900, 3);
  if (titleLines.length === 3) { titleSize = 62; titleLines = wrap(title, titleSize, 900, 3); }
  const tagLines = wrap(tagline, 32, 900, 2);
  const titleTop = 252;
  const tagTop = titleTop + titleLines.length * titleSize * 1.08 + 26;
  const grid = [];
  for (let x = 0; x <= 1200; x += 40) grid.push(`<line x1="${x}" y1="0" x2="${x}" y2="630"/>`);
  for (let y = 0; y <= 630; y += 40) grid.push(`<line x1="0" y1="${y}" x2="1200" y2="${y}"/>`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#FBFCFE"/>
  <g stroke="#DCE7F4" stroke-width="2">${grid.join("")}</g>
  <circle cx="1080" cy="150" r="190" fill="${c.spine}" opacity="0.28"/>
  <rect x="0" y="0" width="34" height="630" fill="${c.spine}"/>
  <rect x="34" y="0" width="3" height="630" fill="#1A1A2E"/>
  <text x="96" y="160" font-family="Geologica" font-weight="600" font-size="26" letter-spacing="3" fill="#0078BF">${esc(String(eyebrow || "").toUpperCase())}</text>
  ${titleLines.map((l, i) => `<text x="96" y="${titleTop + i * titleSize * 1.08}" font-family="Geologica" font-weight="800" font-size="${titleSize}" fill="#1A1A2E">${esc(l)}</text>`).join("\n  ")}
  ${tagLines.map((l, i) => `<text x="96" y="${tagTop + i * 42}" font-family="Geologica" font-weight="400" font-size="32" fill="#4A4D66">${esc(l)}</text>`).join("\n  ")}
  <g transform="translate(96 540)">
    <circle cx="25" cy="2" r="17" fill="#FFE800"/>
    <circle cx="16" cy="2" r="16" fill="none" stroke="#1A1A2E" stroke-width="5"/>
    <path d="M28 14 L44 30" stroke="#1A1A2E" stroke-width="6" stroke-linecap="round"/>
    <text x="64" y="14" font-family="Geologica" font-weight="800" font-size="34" fill="#1A1A2E">Prybambas</text>
  </g>
  ${badge ? (() => { const w = [...badge].length * 18 + 48; return `<g transform="translate(${1140 - w / 2} 548) rotate(-4)"><rect x="${-w / 2}" y="-30" width="${w}" height="56" fill="#FFE800" stroke="#1A1A2E" stroke-width="3"/><text x="0" y="10" text-anchor="middle" font-family="Caveat" font-weight="700" font-size="36" fill="#1A1A2E">${esc(badge)}</text></g>`; })() : ""}
</svg>`;
}

export async function renderOgImages(outDir) {
  const manifestFile = path.join(outDir, "og", "manifest.json");
  if (!fs.existsSync(manifestFile)) return 0;
  const items = JSON.parse(fs.readFileSync(manifestFile, "utf8"));
  for (const item of items) {
    const file = path.join(outDir, item.path);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    const png = new Resvg(svg(item), { font: { fontFiles: FONTS, loadSystemFonts: false, defaultFontFamily: "Geologica" } }).render().asPng();
    fs.writeFileSync(file, png);
  }
  fs.rmSync(manifestFile);
  return items.length;
}

// Запуск окремо: node scripts/og-images.mjs [_site]
if (import.meta.url === `file://${process.argv[1]}`) {
  const n = await renderOgImages(process.argv[2] || "_site");
  console.log(`og: ${n} картинок`);
}
