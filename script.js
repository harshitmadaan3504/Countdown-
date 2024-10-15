// Set the wedding date to 12th November of the current year
const weddingDate = new Date("November 12, 2024 00:00:00").getTime();

// Update the countdown every second
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = weddingDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is finished, display a message
    if (timeRemaining < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "It's Wedding Time!";
    }
}, 1000);
