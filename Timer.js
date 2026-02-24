const start = document.getElementById("Begin");
const stop = document.getElementById("Stop");
const reset = document.getElementById("Reset");
const timer = document.getElementById("time nr");

let timeLeft = 1500;
let interval;

const updateTimer = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

const startTimer = () => {
    interval = setInterval(() => {
    timeLeft--;
    updateTimer();

    if(timeLeft === 0) {
        clearInterval(interval);
        alert("Finally DONE!");
        timeLeft = 1500;
        updateTimer();
    }
        }, 1000);
    };

    const stopTimer = () => clearInterval(interval);

    const resetTimer = () => {
        clearInterval(interval);
        timeLeft = 1500;
        updateTimer();
    }

    start.addEventListener("click", startTimer);
    stop.addEventListener("click", stopTimer);
    reset.addEventListener("click", resetTimer);