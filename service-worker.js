const cacheName = "site-cache-v1";
const filesToCache = [
  "/",
  "/index.html",
  "/page2.html",
  "/style.css",
  "/script.js",
  "/images/img1.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
