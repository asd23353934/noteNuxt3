const STATIC_NAME = 'static-' + new Date().getTime()
const STATIC_ASSETS = [ 
  // 添加其他需要緩存的靜態資源路徑
  // 例如：'/css/main.css', '/js/app.js', '/images/logo.png' 等
];
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_NAME)
      // cache.add(file path)
      cache.addAll(STATIC_ASSETS)
    })()
  )
  self.skipWaiting()
})

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // 檢查是否是同源請求
  const isSameOrigin = url.origin === self.location.origin;

  if (isSameOrigin) {
    event.respondWith(
      caches.match(event.request).then((cacheResponse) => {
        if (cacheResponse) {
          // 如果緩存中有響應，返回緩存的版本
          return cacheResponse;
        }
        // 如果緩存中沒有，從網絡獲取
        return fetch(event.request);
      })
    );
  } else {
    // 對於非同源請求，直接從網絡獲取
    event.respondWith(fetch(event.request));
  }
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      Promise.allSettled(keys.map(key => key !== STATIC_NAME ? caches.delete(key) : null))
    })()
  )
  clients.claim()
})