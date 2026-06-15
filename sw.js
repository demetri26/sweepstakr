// Sweepstakr Service Worker
// Minimal — registers for PWA installability only, does not cache or intercept requests
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
// No fetch handler — all requests pass through to network normally
