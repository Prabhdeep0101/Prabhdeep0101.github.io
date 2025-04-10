function showAlert() {
    alert('Hello! Welcome to MY PERSONAL WEBSITE.');
}
function showDate() {
    document.getElementById('dateDisplay').innerText = new Date().toDateString();
}
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').innerText = timeString;
}

setInterval(updateClock, 1000); 
updateClock(); 

 