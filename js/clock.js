let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


function displayTime() {
    let date = new Date();

    //getting hour ,mins,sec  from date

    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    let hourRotation = 30 * hour + minute / 2;
    let minuteRotation = 6 * minute;
    let secondsRotation = 6 * seconds

    hr.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minuteRotation}deg)`;
    sec.style.transform = `rotate(${secondsRotation}deg)`;


}

setInterval(displayTime, 1000);
