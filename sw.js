const CACHE_NAME = "rotina-caneta-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json"
];

// Instala e faz cache do app shell
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Remove caches antigas
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Cache-first para o app, network-first para fontes externas
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  // Fontes do Google: tenta rede, cai no cache
  if (url.hostname.includes("fonts.googleapis.com") || url.hostname.includes("fonts.gstatic.com")) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        fetch(event.request)
          .then(res => { cache.put(event.request, res.clone()); return res; })
          .catch(() => caches.match(event.request))
      )
    );
    return;
  }

  // CDNs (React, Babel): tenta rede, cai no cache
  if (url.hostname.includes("cdnjs.cloudflare.com")) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        fetch(event.request)
          .then(res => { cache.put(event.request, res.clone()); return res; })
          .catch(() => caches.match(event.request))
      )
    );
    return;
  }

  // App shell: cache-first
  event.respondWith(
    caches.match(event.request).then(cached =>
      cached || fetch(event.request).then(res => {
        if (event.request.method === "GET") {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return res;
      })
    )
  );
});
