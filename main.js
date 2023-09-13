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
    // Check if the browser supports notifications
      if (!("Notification" in window)) {
        // Check if the browser supports notifications
        alert("This browser does not support desktop notification");
      } else if (Notification.permission === "granted") {
        // Check whether notification permissions have already been granted;
        // if so, create a notification
        const notification = new Notification(text);
        // …
      } else if (Notification.permission !== "denied") {
        // We need to ask the user for permission
        Notification.requestPermission().then((permission) => {
          // If the user accepts, let's create a notification
          if (permission === "granted") {
            const notification = new Notification(text);
            // …
          }
        });
      }
    
      // At last, if the user has denied notifications, and you
      // want to be respectful there is no need to bother them anymore.
    
  }
