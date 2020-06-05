const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

setClockHands();

setInterval(setClockHands, 1000);


function setClockHands() {
    let currentTime = new Date();
    const secondHandDegrees = currentTime.getSeconds() * 6 + 90;
    const minuteHandDegrees = currentTime.getMinutes() * 6 + currentTime.getSeconds()/10 + 90;
    const hourHandDegrees = currentTime.getHours() * 30 + currentTime.getMinutes()/10 + 90;

    secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;

    console.log(currentTime);
}