// Читання публічних сторінок магазинів і перетворення їх на однаковий список оголошень.
// Кожне оголошення: { platform, id, title, url, price, currency, format, status, series, image }
//
// Платформи без відкритого API (Amazon, TpT) читаються з публічних сторінок —
// якщо магазин змінить верстку, парсер треба буде підправити.
// Etsy блокує автоматичне читання, тому для нього — імпорт CSV з кабінету (див. etsyFromCsv).

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36";

export async function getPage(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA, "Accept-Language": "en-US,en;q=0.9,uk;q=0.8" } });
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  const text = await res.text();
  if (/captcha/i.test(text) && text.length < 20000) throw new Error(`${url} → магазин показав капчу`);
  return text;
}

const decode = (s) => String(s ?? "")
  .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'")
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
  .replace(/\s+/g, " ").trim();

// ---------- Prom.ua: на сторінці списку товарів є JSON-LD для кожного товару ----------
export function parseProm(html, base) {
  const out = [];
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let d; try { d = JSON.parse(m[1]); } catch { continue; }
    if (d["@type"] !== "Product" || !d.offers) continue;
    const url = new URL(d.offers.url, base).href;
    const avail = String(d.offers.availability || "").split("/").pop();
    out.push({
      platform: "prom",
      id: (url.match(/\/p(\d+)-/) || [])[1],
      sku: d.sku || undefined,
      title: decode(d.name),
      url,
      price: d.offers.price != null ? Number(d.offers.price) : undefined,
      currency: d.offers.priceCurrency || "UAH",
      status: { InStock: "active", PreOrder: "preorder", OutOfStock: "out-of-stock" }[avail] || avail || "active",
      image: d.image || undefined,
    });
  }
  return out;
}

export async function fetchProm(shopUrl) {
  const base = new URL(shopUrl).origin;
  const all = new Map();
  for (let page = 1; page <= 30; page++) {
    const url = `${base}/ua/product_list${page > 1 ? `/page_${page}` : ""}`;
    const items = parseProm(await getPage(url), base);
    const before = all.size;
    for (const i of items) all.set(i.id, i);
    if (!items.length || all.size === before) break;
  }
  return [...all.values()];
}

// ---------- Teachers Pay Teachers: картки товарів на сторінці магазину ----------
export function parseTpt(html) {
  const out = [];
  for (const card of html.split('id="product-row-').slice(1)) {
    const id = card.slice(0, card.indexOf('"'));
    if (!/^\d+$/.test(id)) continue;
    const href = (card.match(/href="(\/Product\/[^"]+)"/) || [])[1];
    const title = (card.match(/alt="Preview of (.*?)"/) || [])[1];
    // Без знижки є лише «Original Price $X»; зі знижкою — ще й «Price $Y» (без «Original» перед ним)
    const original = (card.match(/Original Price \$(\d+(?:\.\d\d)?)/) || [])[1];
    const sale = (card.match(/(?<!Original )Price \$(\d+(?:\.\d\d)?)/) || [])[1];
    const price = sale || original;
    const free = !price && /\bFREE\b/.test(card);
    const bundleSize = (card.match(/Bundle \((\d+) products\)/) || [])[1];
    const image = (card.match(/<img src="(https:\/\/ecdn\.teacherspayteachers\.com\/thumbitem\/[^"]+\.(?:jpg|png))"/) || [])[1];
    const includedIn = (card.match(/Also included in:\s*(?:<[^>]+>\s*)*([^<]+)/) || [])[1];
    out.push({
      platform: "tpt",
      id,
      title: decode(title),
      url: href ? `https://www.teacherspayteachers.com${href}` : undefined,
      price: free ? 0 : price ? Number(price) : undefined,
      originalPrice: sale && original !== sale ? Number(original) : undefined,
      currency: "USD",
      format: bundleSize || /bundle/i.test(title || "") ? "bundle" : "digital",
      bundleSize: bundleSize ? Number(bundleSize) : undefined,
      includedIn: includedIn ? decode(includedIn) : undefined,
      image,
      status: "active",
    });
  }
  return out;
}

export async function fetchTpt(storeUrl) {
  const all = new Map();
  for (let page = 1; page <= 30; page++) {
    const items = parseTpt(await getPage(page > 1 ? `${storeUrl}?page=${page}` : storeUrl));
    const before = all.size;
    for (const i of items) all.set(i.id, i);
    if (!items.length || all.size === before) break;
  }
  return [...all.values()];
}

// ---------- Amazon: сторінка автора містить JSON з усіма книжками ----------
export function parseAmazonAuthor(html) {
  const out = new Map();
  const starts = [...html.matchAll(/\{"asin":"([A-Z0-9]{10})"/g)];
  starts.forEach((m, i) => {
    const seg = html.slice(m.index, starts[i + 1]?.index ?? m.index + 20000);
    const asin = m[1];
    const binding = (seg.match(/"bindingInformation":\{"binding":\{"displayString":"([^"]+)"/) || [])[1];
    const title = (seg.match(/"productImages":\{"altText":"((?:[^"\\]|\\.)*)"/) || [])[1]
      || (seg.match(/"title":\{"displayString":"((?:[^"\\]|\\.)*)"/) || [])[1];
    const series = (seg.match(/"seriesTitle":"((?:[^"\\]|\\.)*)"/) || [])[1];
    const position = (seg.match(/"bookSeriesInfo":\{"position":(\d+)/) || [])[1];
    const price = (seg.match(/"minPrice":\{"amount":([\d.]+),"currencyCode":"([A-Z]{3})"/) || []);
    const image = (seg.match(/"productImages":\{[^]*?"hiRes":\{"url":"(https:[^"]+)"/) || [])[1];
    const prev = out.get(asin) || {};
    out.set(asin, {
      platform: "kdp",
      id: asin,
      title: prev.title || (title ? decode(JSON.parse(`"${title}"`)) : undefined),
      url: `https://www.amazon.com/dp/${asin}`,
      price: prev.price ?? (price[1] ? Number(price[1]) : undefined),
      currency: prev.currency || price[2] || "USD",
      format: prev.format || (binding ? binding.toLowerCase().replace(/ edition$/, "").replace(/\s+/g, "-") : undefined),
      series: prev.series || (series ? decode(JSON.parse(`"${series}"`)) : undefined),
      seriesPosition: prev.seriesPosition || (position ? Number(position) : undefined),
      image: prev.image || image,
      status: "active",
    });
  });
  // Книжки без JSON (напр. блок «Most popular») — лише ASIN і назва з посилання
  for (const m of html.matchAll(/href="\/[^"]*\/dp\/([A-Z0-9]{10})[^"]*"\s+aria-label="([^"]+)"/g)) {
    if (!out.has(m[1])) out.set(m[1], { platform: "kdp", id: m[1], title: decode(m[2]), url: `https://www.amazon.com/dp/${m[1]}`, status: "active" });
  }
  return [...out.values()];
}

export async function fetchAmazon(authorUrl) {
  return parseAmazonAuthor(await getPage(authorUrl));
}

// ---------- Etsy: CSV з Shop Manager → Settings → Options → Download Data ----------
function parseCsv(text) {
  const rows = []; let row = [], cell = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += c; }
    else if (c === '"') q = true;
    else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n" || c === "\r") { if (c === "\r" && text[i + 1] === "\n") i++; row.push(cell); rows.push(row); row = []; cell = ""; }
    else cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  const [head, ...body] = rows.filter((r) => r.some((x) => x.trim()));
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h.trim().toUpperCase(), r[i]])));
}

// У CSV-експорті Etsy немає номера оголошення, тому ключ — номер першого фото (IMAGE1).
// Він стабільний, поки не заміниш головне фото. Посилання — пошук назви в магазині.
export function etsyFromCsv(text, shopUrl = "https://www.etsy.com/shop/Prybambas") {
  const seen = new Map();
  return parseCsv(text).map((r) => {
    const listingId = r.LISTING_ID || r["LISTING ID"];
    const img = ((r.IMAGE1 || "").match(/\/(\d+)\/il_/) || [])[1];
    let id = listingId || (img ? `img${img}` : `t${[...String(r.TITLE)].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7)}`);
    seen.set(id, (seen.get(id) || 0) + 1);
    if (seen.get(id) > 1) id += `-${seen.get(id)}`;
    const title = decode(r.TITLE);
    const variations = [1, 2, 3].map((n) => r[`VARIATION ${n} NAME`]).filter(Boolean);
    const physical = /physical print|t-shirt|shirt|sweatshirt|mug|\boz\b/i.test(title) || variations.length > 0;
    const short = title.split(/[|,:–(]/)[0].trim();
    return {
      platform: "etsy",
      id,
      title,
      url: listingId ? `https://www.etsy.com/listing/${listingId}` : `${shopUrl}?search_query=${encodeURIComponent(short)}`,
      urlKind: listingId ? "listing" : "search",
      price: r.PRICE ? Number(String(r.PRICE).replace(",", ".")) : undefined,
      currency: r.CURRENCY_CODE || "USD",
      format: physical ? "print" : "pdf",
      variations: variations.length ? variations : undefined,
      image: r.IMAGE1 || undefined,
      images: [2, 3, 4, 5, 6, 7, 8, 9, 10].map((k) => r[`IMAGE${k}`]).filter(Boolean),
      status: "active",
    };
  });
}
