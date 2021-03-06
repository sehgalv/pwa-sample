const cacheName = 'pwa-v1'
const assets = [
    '/',
    '/index.html',
    '/js/index.js',
    '/css/style.css',
    '/assets/biscuits_and_jam192x192.JPG',
    '/assets/pumpkin_muffins512x512.JPG',
    '/assets/rose_almond_cookies64x64.JPG'
]
self.addEventListener('install', event => {
    console.log('service-worker__installing')
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll(assets))
    )
})

self.addEventListener('fetch', event => {
    console.log(`service-worker__fetched-resource__${event.request.url}`)
    event.respondWith(
        caches.match(event.request).then(cachedRes => cachedRes || fetch(event.request))
    )
})