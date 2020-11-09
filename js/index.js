const showInternetAvailabilityText = () => {
    const formatDate = (new Date()).toDateString()
    const selectedElement = document.getElementById('date')
    selectedElement.innerHTML = `Last Online: ${formatDate}`
}

document.addEventListener('DOMContentLoaded', showInternetAvailabilityText)

window.addEventListener('offline', () => {
  const selectedElement = document.getElementById('header')
  selectedElement.innerText = 'You are offline, please turn on wifi.'
})

window.addEventListener('online', () => {
  const selectedElement = document.getElementById('header')
  selectedElement.innerText = 'You are online, turn off wifi to view alternate text!'
})

if ('serviceWorker' in navigator) {
    window.addEventListener("load", () => 
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    )
  }