if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('./sw.js', { scope: '/' })
      .then(function(registration) {
        console.log(registration)

        registration.onupdatefound = function() {
          const installingWorker = registration.installing

          installingWorker.onstatechange = function() {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
              } else {
              }
            }
          }
        }
      })
      .catch(function(err) {
        console.log(err)
      })
  })
}
