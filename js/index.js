const showInternetAvailabilityText = () => {
    const formatDate = (new Date()).toDateString();
    const selectElement = document.getElementById('date');
    selectElement.innerHTML = formatDate;
}

document.addEventListener('DOMContentLoaded', showInternetAvailabilityText)

if ('serviceWorker' in navigator) {
    window.addEventListener("load", () => 
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    )
  }