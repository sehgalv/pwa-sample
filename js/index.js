const showInternetAvailabilityText = () => {
  const formatDate = (new Date()).toDateString()
    const selectedElement = document.getElementById('date')
    selectedElement.innerHTML = `Last Online: ${formatDate}`
}

document.addEventListener('DOMContentLoaded', showInternetAvailabilityText);

// Prompt user to add to Home Screen
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();

  deferredPrompt = e;
})

const addToHomeScreenButton = document.getElementById('add-to-home-screen');
addToHomeScreenButton.addEventListener('click', () => {
  deferredPrompt.prompt();
  deferredPrompt.choice.then((userChoice) => {
    if (userChoice === 'accepted') {
      console.log('User has accepted prompt.')
    }
    deferredPrompt = null
  })
})

window.addEventListener('appinstalled', () => {
  const selectedElement = document.getElementById('app-installed')
  selectedElement.innerHTML = `Your app is now installed on the home screen...`
})

window.addEventListener('offline', () => {
  const selectedElement = document.getElementById('header')
  selectedElement.innerText = 'You are offline, please turn on wifi.'
})

window.addEventListener('online', () => {
  const selectedElement = document.getElementById('header')
  selectedElement.innerText = 'You are online, turn off wifi to view alternate text!'
})

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => 
        navigator.serviceWorker.register('/service-worker.js')
          .then(reg => {
            console.log("service worker registered")
          })
          .catch(err => console.log("service worker not registered", err))
    )
}


            // if (Notification.permission == 'granted') {
            //   reg.showNotification('Hello world!');
            // }

Notification.requestPermission(function(status) {
  console.log('Notification permission status:', status);
});


function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      reg.showNotification('Hello world!');
    });
  }
}

displayNotification()