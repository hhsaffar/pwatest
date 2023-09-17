// Register the service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/pwatest/service-worker.js',{scope: '/myapp/'})
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope,' yayz!');
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    });

    navigator.serviceWorker.ready
  .then(function(registration) {
    console.log('A service worker is active:', registration.active);

    // At this point, you can call methods that require an active
    // service worker, like registration.pushManager.subscribe()
  });
  }
  
  // Add an event listener to the button
  const showButton = document.getElementById('show-button');
  showButton.addEventListener('click', () => {
    const textInput = document.getElementById('text-input');
    const text = textInput.value;
    alert (text);
    // Display notification after 2 seconds
    setTimeout(() => {
      showNotification(text);
    }, 2000);
  });
  
  // Function to display the notification
function showNotification(text) {
  if ('serviceWorker' in navigator && 'Notification' in window) {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        navigator.serviceWorker.ready.then(registration => {
          registration.showNotification('Notification', {
            body: text,
            icon: 'icon.png'
          });
        });
      } else if (permission === 'default') {
        // Permission has not been granted, show a prompt to request permission
        Notification.requestPermission().then(newPermission => {
          if (newPermission === 'granted') {
            navigator.serviceWorker.ready.then(registration => {
              registration.showNotification('Notification', {
                body: text,
                icon: 'icon.png'
              });
            });
          }
        });
      }
    });
  }
}
