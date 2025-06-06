const CACHE_NAME = "prices-cache-v1";
const urlsToCache = [
  // "/",
  // "/index.html",
  "/local/templates/s1/css/style.min.css",
  "/local/templates/s1/js/app.min.js",
  // "/img/chat256.png",
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
