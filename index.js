document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const startButton = document.getElementById('start-btn');
    const stopButton = document.getElementById('stop-btn');
    const resetButton = document.getElementById('reset-btn');

    let startTime;
    let updatedTime;
    let difference;
    let tInterval;
    let running = false;
    let timer;

    function startTimer() {
        if (!running) {
            startTime = new Date().getTime();
            tInterval = setInterval(getShowTime, 1);
            running = true;
            startButton.disabled = true;
            stopButton.disabled = false;
            resetButton.disabled = false;
        }
    }

    function stopTimer() {
        if (running) {
            clearInterval(tInterval);
            running = false;
            startButton.disabled = false;
            stopButton.disabled = true;
        }
    }

    function resetTimer() {
        clearInterval(tInterval);
        display.textContent = '00:00:00';
        startButton.disabled = false;
        stopButton.disabled = true;
        resetButton.disabled = true;
        running = false;
    }

    function getShowTime() {
        updatedTime = new Date().getTime();
        difference = updatedTime - startTime;

        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
});
