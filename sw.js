const CACHE_NAME = 'prybambas-v8';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

self.addEventListener('install', event => {
    // Нова версія вмикається одразу, не чекаючи закриття всіх вкладок
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

// Прибираємо старі кеші й одразу беремо відкриті сторінки під контроль
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

// Сторінки й усе з «Наймолодшим» (/little/): спершу мережа, щоб завжди бачити свіжу версію;
// без інтернету — збережена копія (тож трекер для батьків працює офлайн).
self.addEventListener('fetch', event => {
    const req = event.request;
    if (req.method !== 'GET') return;
    const url = new URL(req.url);
    const isLittle = url.origin === location.origin && url.pathname.startsWith('/little/');

    if (req.mode === 'navigate' || isLittle) {
        event.respondWith(
            fetch(req)
                .then(res => {
                    const copy = res.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
                    return res;
                })
                .catch(() => caches.match(req).then(r => r || (req.mode === 'navigate' ? caches.match('./index.html') : undefined)))
        );
        return;
    }

    // Інше (іконки, маніфест): з кешу, якщо є, інакше з мережі
    event.respondWith(
        caches.match(req).then(res => res || fetch(req))
    );
});
