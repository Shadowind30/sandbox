self.addEventListener('fetch', function(event) {
  /// Return if the request is made by other than the web page
  if (!(evt.request.url.indexOf('http') === 0)) return;
  event.respondWith(async function() {
     try{
       var res = await fetch(event.request);
       var cache = await caches.open('cache');
       cache.put(event.request.url, res.clone());
       return res;
     }
     catch(error){
       return caches.match(event.request);
      }
    }());
});