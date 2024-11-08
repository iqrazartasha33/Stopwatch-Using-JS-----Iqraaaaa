let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('startbtn').innerText = "Start";
  } else {
    timer = setInterval(updateTime, 1000);
    isRunning = true;
    document.getElementById('startbtn').innerText = "Pause";
  }
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  displayTime();
}

function displayTime() {
  const display = document.getElementById("display");
  display.textContent = 
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function reset() {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  isRunning = false;
  displayTime();
}
