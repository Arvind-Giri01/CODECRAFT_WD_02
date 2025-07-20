let startTime = 0;
let elapsed = 0;
let timerInterval = null;
let isRunning = false;

function timeToString(time) {
  const hrs = String(Math.floor(time / 3600000)).padStart(2, '0');
  const mins = String(Math.floor((time % 3600000) / 60000)).padStart(2, '0');
  const secs = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function print(txt) {
  document.getElementById('time').textContent = txt;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  startTime = Date.now() - elapsed;
  timerInterval = setInterval(() => {
    elapsed = Date.now() - startTime;
    print(timeToString(elapsed));
  }, 1000);
}

function pauseTimer() {
  if (!isRunning) return;
  isRunning = false;
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  print('00:00:00');
  elapsed = 0;
  document.getElementById('laps').innerHTML = '';
}

function recordLap() {
  if (!isRunning) return;
  const lapTime = timeToString(elapsed);
  const lapList = document.getElementById('laps');
  const li = document.createElement('li');
  li.textContent = `Lap ${lapList.children.length + 1}: ${lapTime}`;
  lapList.appendChild(li);
}
