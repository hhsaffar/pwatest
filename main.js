// Register the service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
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
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Notification', { body: text });
        }
      });
    }
  }
