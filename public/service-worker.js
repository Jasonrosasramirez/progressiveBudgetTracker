const { response } = require("express");

/* -- what to CACHE -- */
const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/script.js",
  "/dbReference.js",
  "/manifest.json",
  "/style.css",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png"
];


// install
self.addEventListener("install", function (evt) {
  // pre cache all static assets
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );

  // tell the browser to activate this service worker immediately once it
  // has finished installing
  self.skipWaiting();
});

// fetch
self.addEventListener("fetch", function (evt) {
  if (evt.request.url.includes("/api/")) {
    evt.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache => {
        return fetch(evt.request)
          .then(response => {
            // If the response was good, clone it and store it in the cache.
            if (response.status === 200) {
              cache.put(evt.request.url, response.clone());
            }

            return response;
          })
          .catch(err => {
            // Network request failed, try to get it from the cache.
            return cache.match(evt.request);
          });
      }).catch(err => console.log(err))
    );

    return;
  }

  evt.respondWith(    
    fetch(evt.request).catch(() => {
      return caches.match(evt.request)
      .then(res => {
        if(res) {
          return res
        }
        elseif(evt.request.headers.get("accept").includes("text/html"))
        {
          return caches.match("/")
        }
      })
    })
  );
});
