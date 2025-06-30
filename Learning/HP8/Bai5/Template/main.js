let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function updateDisplay() {
    const display = document.getElementById("display");
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    display.innerText = `${h}:${m}:${s}`;
}

function start() {
    if (timer !== null) return; // Ngăn nhiều interval chạy cùng lúc
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 1000);
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);
    timer = null;
    [hours, minutes, seconds] = [0, 0, 0];
    updateDisplay();
}
