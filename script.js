const song = document.querySelector(".song");
const play = document.querySelector(".play");
const video = document.querySelector(".video");
const timeDisplay = document.querySelector(".time-display");
const soundPicker = document.querySelectorAll(".sound-picker button");
const timeButtons = document.querySelectorAll(".time-select button");

let fakeDuration = 600;
let interval;

// PLAY / PAUSE
play.addEventListener("click", function () {
  if (song.paused) {
    song.play();
    video.play();
    startTimer();
  } else {
    song.pause();
    video.pause();
    clearInterval(interval);
  }
});

// SWITCH SOUND + VIDEO
soundPicker.forEach(button => {
  button.addEventListener("click", function () {
    song.src = this.getAttribute("data-sound");
    video.src = this.getAttribute("data-video");
    if (!song.paused) {
      song.play();
      video.play();
    }
  });
});

// TIME BUTTONS
timeButtons.forEach(button => {
  button.addEventListener("click", function () {
    fakeDuration = this.getAttribute("data-time");
    updateDisplay(fakeDuration);
  });
});

function startTimer() {
  clearInterval(interval);
  interval = setInterval(function () {
    fakeDuration--;
    updateDisplay(fakeDuration);
    if (fakeDuration <= 0) {
      clearInterval(interval);
      song.pause();
      video.pause();
    }
  }, 1000);
}

function updateDisplay(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  timeDisplay.textContent = minutes + ":" + seconds;
}
