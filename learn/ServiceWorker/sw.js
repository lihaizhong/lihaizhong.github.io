self.addEventListener('install', function(event) {
  function setup() {}

  event.waitUntil(setup())
})

self.addEventListener('activate', function(event) {
  function setup() {}

  event.waitUntil(setup())
})

self.addEventListener('message', function(event) {
  console.log(event)
})

self.addEventListener('fetch', function(event) {
  function setup() {
    console.log(event.request)
    return fetch(event.request)
      .then(function(response) {
        console.log(response)
        return response
      })
      .catch(function(err) {
        console.log(err)
      })
  }

  event.respondWith(setup())
})

self.addEventListener('sync', function(event) {
  function setup() {
    console.log('sync serviceWorker')
  }

  event.waitUntil(setup())
})

self.addEventListener('push', function(event) {
  function setup() {
    console.log('push serviceWorker')
  }

  event.waitUntil(setup())
})
