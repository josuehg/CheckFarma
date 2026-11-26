// Service worker: guarda la app para abrirla sin internet. Los datos los sincroniza Firestore.
const V = 'checkfarma-v3';
const SHELL = ['./', './index.html', './config.js', './pdf-lib.min.js', './manifest.webmanifest', './icon-192.png', './icon-512.png', './logo-bcd.jpg', './logo-carpe.jpg'];
const CDN = ['www.gstatic.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const u = new URL(req.url); const same = u.origin === location.origin;
  if (!same && !CDN.includes(u.hostname)) return;           // Firestore, Auth: nunca se cachean
  if (same && u.pathname.startsWith('/__/')) return;
  if (req.mode === 'navigate') {                             // páginas: red primero, copia si no hay señal
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(V).then(x => x.put('./index.html', c)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => {              // archivos: copia guardada y se actualiza por detrás
    const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') { const c = r.clone(); caches.open(V).then(x => x.put(req, c)); } return r; }).catch(() => hit);
    return hit || net;
  }));
});
