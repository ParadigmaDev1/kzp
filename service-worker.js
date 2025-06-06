const CACHE_NAME = "prices-cache-v1";
const urlsToCache = [
  "/kzp/",
  "/kzp/index.html",
  "/kzp/css/style.min.css",
  "/kzp/js/app.min.js",
  "/kzp/img/chat256.png",
];

// Установка Service Worker и кеширование ресурсов
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Обработка запросов (доставка из кеша)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
