const clock = document.querySelector(".clock");

let sec = 0,
    min = 0,
    hr = 0,
    intervalId = null;
const startStopWatch = () => {
    if (intervalId != null) return;
    intervalId = setInterval(() => {
        if (sec < 59) sec++;
        else if (min >= 59) {
            hr++;
            min = 0;
        }
        else {
            sec = 0;
            min++;
        }

        const hours = hr.toString().padStart(2, "0");
        const minutes = min.toString().padStart(2, "0");
        const seconds = sec.toString().padStart(2, "0");
        clock.innerText = `${hours}:${minutes}:${seconds}`;
        console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
}
const stopStopWatch = () => {
    clearInterval(intervalId);
    intervalId = null;
}
const resetStopWatch = () => {
    clearInterval(intervalId);
    intervalId = null;
    sec = 0;
    min = 0;
    hr = 0;
    const hours = hr.toString().padStart(2, "0");
    const minutes = min.toString().padStart(2, "0");
    const seconds = sec.toString().padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}