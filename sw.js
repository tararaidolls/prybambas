const CACHE_NAME = 'prybambas-v7';
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

self.addEventListener('fetch', event => {
    const req = event.request;
    if (req.method !== 'GET') return;

    // Сторінки: спершу мережа (щоб завжди бачити свіжу версію), кеш — лише офлайн
    if (req.mode === 'navigate') {
        event.respondWith(
            fetch(req)
                .then(res => {
                    const copy = res.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
                    return res;
                })
                .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
        );
        return;
    }

    // Інше (іконки, маніфест): з кешу, якщо є, інакше з мережі
    event.respondWith(
        caches.match(req).then(res => res || fetch(req))
    );
});
