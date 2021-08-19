self.addEventListener("fetch", function (event) {
  debugger
  /// Return if the request is made by other than the web page
  if (event.request.url.includes("http")) {
    event.respondWith(
      (async function () {
        try {
          debugger;
          var res = await fetch(event.request);
          var cache = await caches.open("cache");
          cache.put(event.request.url, res.clone());
          return res;
        } catch (error) {
          return caches.match(event.request);
        }
      })()
    );
  }
});
