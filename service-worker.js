const cacheName = 'pwa-v1'
const assets = [
    '/index.html',
    '/js/app.js'
]
self.addEventListener('install', event => {
    console.log('service-worker__installing')
    event.waitUntil(
        caches.open(cacheName).then(cache => cache.addAll(assets))
    )
})

self.addEventListener("fetch", event => {
    console.log('service-worker__fetched-resource__'+e.request.url);
    event.respondWith(
      caches.match(event.request).then(res => res || fetch(event.request))
    )
})