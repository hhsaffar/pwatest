
// What this method does is that it caches all the files that are required for the app to run offline.
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('minimal-pwa').then(cache => {
        return cache.addAll([
          'index.html',
          'main.js',
          'manifest.json',
          'icon.png'
        ]);
      })
    );
  });
 
  
  // What this method does is that it intercepts all the requests made to the server and checks if the request is available in the cache. If it is available, it returns the cached response, otherwise it fetches the response from the server.
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );    
  });
