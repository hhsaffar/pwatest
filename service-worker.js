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

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  // Add your custom logic here when the notification is clicked
});
