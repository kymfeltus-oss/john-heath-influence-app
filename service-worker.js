const CACHE_NAME = "jh-influence-cache-v1";
const ASSETS = [
  "/",
  "index.html",
  "books.html",
  "about.html",
  "contact.html",
  "style.css",
  "books.css",
  "about.css",
  "contact.css",
  "transition.js",
  "particles.js",
  "logo.png",
  "john-heath.jpg",
  "IMG_2855.png",
  "IMG_2856.png",
  "IMG_2858.png",
  "IMG_2867.png",
  "IMG_2869.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
});
