// Prybambas Offline — конструктор плаката (сторінка /<мова>/offline/).
// Малює живий попередній перегляд тим самим кодом, що й файл для друку (offline/poster.mjs),
// і збирає заявку: або надсилає у форму (offline.yml → request.action), або дає файл заявки.
import { renderPoster, gameQrUrl, slugify } from "/offline/poster.mjs";

const O = window.OFFLINE;
const UI = O.data[O.ui];
const T = UI.t;
const form = document.getElementById("off-form");
const preview = document.getElementById("off-preview");
const reqForm = document.getElementById("off-request");
const errBox = document.getElementById("off-error");
const okBox = document.getElementById("off-ok");
const logoInput = form.elements.logo;
const logoRemove = document.getElementById("off-logo-remove");
const DRAFT_KEY = "prybambas_offline_draft";
const fmt = (s, v) => String(s).replace(/\{(\w+)\}/g, (_, k) => v[k] ?? "");

let logo = null;      // { dataUrl, file }

const checked = (name) => [...form.querySelectorAll(`input[name="${name}"]:checked`)].map((i) => i.value);

function config() {
  const venueName = form.elements.venue.value.trim();
  return {
    v: 1,
    lang: form.elements.lang.value,
    poster: form.querySelector('input[name="poster"]:checked')?.value,
    games: checked("games"),
    tasks: checked("tasks"),
    venue: { name: venueName, slug: slugify(venueName) },
    size: form.elements.size.value,
    qty: Math.max(1, Math.min(50, parseInt(form.elements.qty.value, 10) || 1)),
  };
}

// Конфігурація → дані для рендерера мовою плаката
function resolve(c) {
  const L = O.data[c.lang] || UI;
  const base = L.posters.find((p) => p.slug === c.poster) || L.posters[0];
  return {
    poster: { ...L.t.poster, palette: base.palette, title: base.title, subtitle: base.subtitle },
    games: c.games.map((s) => L.games.find((g) => g.slug === s)).filter(Boolean)
      .map((g) => ({ ...g, url: gameQrUrl(O.site, g.path, c.venue.slug) })),
    tasks: c.tasks.map((s) => L.tasks.find((t) => t.slug === s)).filter(Boolean),
    venue: { ...c.venue, logo: logo?.dataUrl },
    size: UI.sizes.find((s) => s.key === c.size) || UI.sizes[0],
  };
}

// Не більше N галочок: решта вимикається
function limit(name, max) {
  const boxes = [...form.querySelectorAll(`input[name="${name}"]`)];
  const n = boxes.filter((b) => b.checked).length;
  boxes.forEach((b) => { b.disabled = !b.checked && n >= max; b.closest("label").classList.toggle("is-off", b.disabled); });
  const out = form.querySelector(`[data-count="${name}"]`);
  if (out) out.textContent = fmt(T.pick_up_to, { n, max });
}

function draw() {
  limit("games", UI.maxGames);
  limit("tasks", UI.maxTasks);
  const c = config();
  preview.innerHTML = renderPoster({ ...resolve(c), qrcode: window.qrcode });
  const svg = preview.querySelector("svg");
  svg.removeAttribute("width"); svg.removeAttribute("height");
  svg.setAttribute("role", "img");
  try { localStorage.setItem(DRAFT_KEY, JSON.stringify(c)); } catch (e) {}
}

// Логотип: растр зменшуємо до 1600 px (для превʼю й заявки), SVG лишаємо як є
async function readLogo(file) {
  const asUrl = (f) => new Promise((ok, no) => { const r = new FileReader(); r.onload = () => ok(r.result); r.onerror = no; r.readAsDataURL(f); });
  const url = await asUrl(file);
  if (file.type === "image/svg+xml") return url;
  const img = await new Promise((ok, no) => { const i = new Image(); i.onload = () => ok(i); i.onerror = no; i.src = url; });
  const k = Math.min(1, 1600 / Math.max(img.width, img.height));
  if (k === 1 && file.size < 1.5e6) return url;
  const cv = document.createElement("canvas");
  cv.width = Math.round(img.width * k); cv.height = Math.round(img.height * k);
  cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);
  return cv.toDataURL("image/png");
}

logoInput.addEventListener("change", async () => {
  const f = logoInput.files[0];
  if (!f) return;
  try { logo = { dataUrl: await readLogo(f), file: f }; } catch (e) { logo = null; }
  logoRemove.hidden = !logo;
  draw();
});
logoRemove.addEventListener("click", () => { logo = null; logoInput.value = ""; logoRemove.hidden = true; draw(); });
form.addEventListener("input", draw);
form.addEventListener("change", draw);

// Відновлюємо незавершену чернетку цього відвідувача (крім логотипа)
try {
  const d = JSON.parse(localStorage.getItem(DRAFT_KEY) || "null");
  if (d && d.v === 1) {
    const set = (name, vals) => form.querySelectorAll(`input[name="${name}"]`).forEach((i) => { i.checked = vals.includes(i.value); });
    if (d.poster) set("poster", [d.poster]);
    set("games", d.games || []); set("tasks", d.tasks || []);
    form.elements.venue.value = d.venue?.name || "";
    if (O.data[d.lang]) form.elements.lang.value = d.lang;
    if (UI.sizes.some((s) => s.key === d.size)) form.elements.size.value = d.size;
    form.elements.qty.value = d.qty || 1;
  }
} catch (e) {}
draw();

// ---------- Заявка
function summary(c, contact) {
  const r = resolve(c);
  const L = O.data[c.lang] || UI;
  const base = L.posters.find((p) => p.slug === c.poster);
  return [
    `Prybambas Offline: ${c.venue.name || "—"}`,
    `Poster: ${base?.name} (${c.lang})`,
    `Games: ${r.games.map((g) => g.title).join(", ") || "—"}`,
    `Puzzles: ${r.tasks.map((t) => `${t.label}: ${t.text}`).join(" | ") || "—"}`,
    `Size: ${r.size.label} × ${c.qty}`,
    `Logo: ${logo ? "yes" : "no"}`,
    contact ? `Contact: ${contact.name}, ${contact.email}, ${contact.phone || "—"}` : "",
    contact ? `Address: ${contact.address}` : "",
    contact?.message ? `Comment: ${contact.message}` : "",
  ].filter(Boolean).join("\n");
}

function showError(msg) { errBox.textContent = msg; errBox.hidden = !msg; }

function download(c, contact) {
  const req = { ...c, venue: { ...c.venue, logo: logo?.dataUrl || null }, contact, created: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(req, null, 2)], { type: "application/json" });
  const a = Object.assign(document.createElement("a"), {
    href: URL.createObjectURL(blob),
    download: `prybambas-offline-${c.venue.slug || "request"}-${req.created.slice(0, 10)}.json`,
  });
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 5000);
}

const mailto = document.getElementById("off-mailto");
function updateMailto(c, contact) {
  if (!mailto) return;
  const subject = `Prybambas Offline: ${c.venue.name || "request"}`;
  mailto.href = `mailto:${UI.request.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary(c, contact) + "\n\n(+ request file attached)")}`;
}
reqForm.addEventListener("input", () => updateMailto(config(), contactOf()));
form.addEventListener("change", () => updateMailto(config(), contactOf()));
updateMailto(config());

function contactOf() {
  const f = reqForm.elements;
  return { name: f.name.value.trim(), email: f.email.value.trim(), phone: f.phone.value.trim(), address: f.address.value.trim(), message: f.message.value.trim() };
}

reqForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  showError("");
  const c = config();
  if (!c.games.length && !c.tasks.length) { showError(T.need_one_game); document.getElementById("builder").scrollIntoView({ behavior: "smooth" }); return; }
  if (!reqForm.reportValidity()) return;
  const contact = contactOf();

  if (!UI.request.action) { download(c, contact); updateMailto(c, contact); return; }

  const btn = reqForm.querySelector('button[type="submit"]');
  const label = btn.textContent;
  btn.disabled = true; btn.textContent = T.sending;
  try {
    const fd = new FormData();
    for (const [k, v] of Object.entries(contact)) fd.append(k, v);
    fd.append("_subject", `Prybambas Offline: ${c.venue.name || contact.name}`);
    fd.append("summary", summary(c, contact));
    fd.append("config", JSON.stringify(c));
    if (logo?.file) fd.append("logo", logo.file, logo.file.name);
    const res = await fetch(UI.request.action, { method: "POST", body: fd, headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(String(res.status));
    reqForm.querySelectorAll("input, textarea").forEach((i) => { i.value = ""; });
    okBox.hidden = false;
  } catch (err) {
    showError(fmt(T.send_error, { email: UI.request.email }));
    download(c, contact);
  } finally {
    btn.disabled = false; btn.textContent = label;
  }
});
