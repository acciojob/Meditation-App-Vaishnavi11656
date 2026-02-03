const song = document.querySelector(".song");
const play = document.querySelector(".play");
const video = document.querySelector(".video");
const timeDisplay = document.querySelector(".time-display");
const soundPicker = document.querySelectorAll(".sound-picker button");
const timeButtons = document.querySelectorAll(".time-select button");

let fakeDuration = 600;
let interval = null;

// PLAY / PAUSE
play.addEventListener("click", function () {
  if (song.paused) {
    song.currentTime = 0;
    video.currentTime = 0;

    const p1 = song.play();
    const p2 = video.play();
    if (p1) p1.catch(() => {});
    if (p2) p2.catch(() => {});

    startTimer();
  } else {
    stopEverything();
  }
});

// STOP FUNCTION
function stopEverything() {
  song.pause();
  video.pause();
  clearInterval(interval);
}

// SWITCH SOUND + VIDEO
soundPicker.forEach(button => {
  button.addEventListener("click", function () {
    stopEverything();
    song.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
  });
});

// TIME BUTTONS
timeButtons.forEach(button => {
  button.addEventListener("click", function () {
    fakeDuration = parseInt(this.getAttribute("data-time"));
    updateDisplay(fakeDuration);
    stopEverything();
  });
});

function startTimer() {
  clearInterval(interval);
  interval = setInterval(function () {
    fakeDuration--;
    updateDisplay(fakeDuration);

    if (fakeDuration <= 0) {
      stopEverything();
    }
  }, 1000);
}

function updateDisplay(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  timeDisplay.textContent = minutes + ":" + seconds;
}

// INITIAL DISPLAY
updateDisplay(fakeDuration);
