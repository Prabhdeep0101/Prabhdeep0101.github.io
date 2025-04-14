<<<<<<< HEAD
function showAlert() {
    alert('Hello! Welcome to my personal website.');
}
function showDate() {
    document.getElementById('dateDisplay').innerText = new Date().toDateString();
}
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').innerText = timeString;
}

setInterval(updateClock, 1000); // Update every second
updateClock(); // Initial call to display immediately

=======
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

>>>>>>> f3740da (Add portfolio.html with class projects and skills)
 