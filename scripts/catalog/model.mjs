// Модель каталогу: товари (content/products) + знімки магазинів (content/shops).
//
// У product.yml товар перелічує свої оголошення:
//   listings:
//     - { platform: kdp,  id: B0GW3S7FLK, lang: en }                 # дані підтягнуться зі знімка
//     - { platform: prom, id: "3247989226", lang: uk, format: pdf }   # format/price/url можна уточнити вручну
//     - { platform: etsy, url: https://www.etsy.com/listing/…, lang: en, price: 6, currency: USD }
// Назва, ціна, посилання й статус беруться зі знімка магазину (npm run shops),
// а поля, вписані в product.yml, мають перевагу.
import fs from "node:fs";
import path from "node:path";

export const PLATFORMS = {
  kdp:     { label: "Amazon",          url: (id) => `https://www.amazon.com/dp/${id}` },
  tpt:     { label: "TpT",             url: null },
  etsy:    { label: "Etsy",            url: (id) => `https://www.etsy.com/listing/${id}` },
  prom:    { label: "Prom.ua",         url: null },
  gumroad: { label: "Gumroad",         url: null },
  site:    { label: "Prybambas",       url: null },
};

// Формат → чи це друкована книжка
export const PRINT_FORMATS = new Set(["paperback", "hardcover", "print"]);

export function loadShops(root = "content/shops") {
  const shops = {};
  if (!fs.existsSync(root)) return shops;
  for (const f of fs.readdirSync(root).filter((f) => f.endsWith(".json"))) {
    const d = JSON.parse(fs.readFileSync(path.join(root, f), "utf8"));
    shops[d.platform] = { ...d, byId: new Map(d.items.map((i) => [String(i.id), i])) };
  }
  return shops;
}

// Оголошення товару з даними зі знімка
export function resolveListings(product, shops) {
  return (product.listings || []).map((l, index) => {
    const shop = shops[l.platform];
    const snap = l.id != null && shop ? shop.byId.get(String(l.id)) : undefined;
    const merged = { ...(snap || {}), ...l, id: l.id != null ? String(l.id) : snap?.id };
    const builder = PLATFORMS[l.platform]?.url;
    merged.url = l.url || snap?.url || (builder && merged.id ? builder(merged.id) : undefined);
    merged.status = l.status || snap?.status || (shop ? "missing" : "unknown");
    merged.inSnapshot = Boolean(snap);
    merged.snapshotDate = shop?.updated;
    merged.index = index;
    return merged;
  });
}

// Кнопки «Купити» для сайту: по мові видання, по одній на платформу й формат
export function buyEditions(product, listings, site) {
  const shown = listings.filter((l) => l.url && !l.hidden && !["removed", "missing"].includes(l.status));
  const meta = Object.fromEntries((product.editions || []).map((e) => [e.lang, e]));
  const langs = [...new Set([...shown.map((l) => l.lang || "en"), ...Object.keys(meta)])];
  const order = (site.stores || []).map((s) => s.key);
  return langs.map((lang) => {
    const seen = new Set();
    const buttons = shown
      .filter((l) => (l.lang || "en") === lang)
      .sort((a, b) => order.indexOf(a.platform) - order.indexOf(b.platform) || a.index - b.index)
      // одна кнопка на платформу для файлів (перший у списку — зазвичай набір) і окремо для паперу/Kindle
      .filter((l) => { const k = `${l.platform}|${PRINT_FORMATS.has(l.format) || l.format === "kindle" ? l.format : "file"}`; if (seen.has(k)) return false; seen.add(k); return true; })
      .map((l) => ({
        platform: l.platform,
        label: (site.stores || []).find((s) => s.key === l.platform)?.label || PLATFORMS[l.platform]?.label || l.platform,
        url: l.url,
        format: l.format,
        print: PRINT_FORMATS.has(l.format),
        markets: (site.stores || []).find((s) => s.key === l.platform)?.markets,
      }));
    // старий формат product.yml: editions[].buy
    for (const [key, url] of Object.entries(meta[lang]?.buy || {})) {
      if (!buttons.some((b) => b.platform === key)) buttons.push({ platform: key, label: (site.stores || []).find((s) => s.key === key)?.label || key, url, print: key === "kdp" });
    }
    return { ...(meta[lang] || {}), lang, buttons };
  }).filter((e) => e.buttons.length || e.pages || e.title);
}
