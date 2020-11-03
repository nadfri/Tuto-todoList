importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const {registerRoute}        = workbox.routing;
const {StaleWhileRevalidate} = workbox.strategies;
const {CacheFirst}           = workbox.strategies;

if (workbox) 
{
  console.log(`WorkBox of TodoList loaded🎉`);

  registerRoute(
    ({request}) => request.destination === 'document'||
                   request.destination === 'script'  ||
                   request.destination === 'style',
                   
    new StaleWhileRevalidate()
  );

  registerRoute(
    // Cache image files.
    ({request}) => request.destination === 'image',
    // Use the cache if it's available.
    new CacheFirst({cacheName: 'image-cache',}) // Use a custom cache name.
  );
}

else { console.log(`Boo! Workbox of TodoList didn't load 😬`); }