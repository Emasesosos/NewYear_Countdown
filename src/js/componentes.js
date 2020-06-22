/* CSS */
import './../css/componentes.css';
/* DOM */
const days = document.getElementById('days');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerHTML = currentYear + 1;

/* *** UPDATE COUNTDOWN *** */
const updateCountdown = () => {

    const currenTime = new Date();
    const diff = newYearTime - currenTime;
    
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
   
    // Add values to DOM
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? `0${h}` : h;
    minutes.innerHTML = m < 10 ? `0${m}` : m;
    seconds.innerHTML = s < 10 ? `0${s}` : s;

};
/* ************************************************************ */
const events = () => {
    console.log('Event Listeners');
    setTimeout(() => {
        loading.remove();
        countdown.style.display = 'flex';
    }, 1000);
};
/* ************************************************************ */
const init = () => {
    console.log('New Year Countdown');
    setInterval(updateCountdown, 1000); // Run every second
    events();
};
/* ************************************************************ */
export {
    init
}