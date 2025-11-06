/* service-worker.js — caches pages, scripts, and images for offline use */

const CACHE_NAME = "jh-influence-cache-v1";
const ASSETS = [
  "./",
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
  "service-worker.js",
  "manifest.json",
  "logo.png",
  "john-heath.jpg",
  "IMG_2855.png",
  "IMG_2856.png",
  "IMG_2858.png",
  "IMG_2867.png",
  "IMG_2869.png"
];

/* Install event — pre-cache core assets */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

/* Fetch event — serve from cache first, then network fallback */
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});

/* Activate event — remove old caches */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});
