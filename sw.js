// Service worker do Palpites da Sorte: guarda o app para funcionar offline.
// Ao publicar uma versao nova do index.html, troque o numero abaixo (ex.: v2).
const V = "palpites-v6";
const ARQ = ["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-256.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(ARQ)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (e.request.method === "GET" && u.hostname === "cdn.jsdelivr.net"){   // leitor de texto (foto): guarda depois da 1a vez
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { const cp = res.clone(); caches.open(V).then(c => c.put(e.request, cp)); return res; })));
    return;
  }
  if (e.request.method !== "GET" || u.origin !== location.origin) return;   // buscas da CAIXA/API passam direto
  e.respondWith(caches.match(e.request, {ignoreSearch: true}).then(r => r || fetch(e.request).then(res => {
    const cp = res.clone(); caches.open(V).then(c => c.put(e.request, cp)); return res;
  })));
});
