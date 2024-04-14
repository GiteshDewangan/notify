// This code should be placed inside public/service-worker.js
self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('push', event => {
    const data = event.data.json();
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: data.icon
    });
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(windowClients => {
            for (let windowClient of windowClients) {
                if (windowClient.url === event.notification.data.url && 'focus' in windowClient) {
                    return windowClient.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(event.notification.data.url);
            }
        })
    );
});
