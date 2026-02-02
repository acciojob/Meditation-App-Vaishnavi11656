//your JS code here. If required.
const song = document.querySelector(".song");
const playBtn = document.querySeleector(".play");
const timeDisplay = document.querySelector(".time-display");
const video = document.querySelector(".video");
const soundPicker = document.querySelectorAll(".sound-picker button");
const timeButton = document.querySelectorAll(".time-select button");

let fakeduration = 600;

playBtn.addEventListener("click" ()=>{
	if(song.pause){
		song.play();
		video.play();
		playBtn.pause = "pause.svg";
	}else{
		song.pause();
		video.pause();
		playBtn.play = "play.svg";
	}
});

soundPicker.forEach(button =>{
	button.addEventListener("click", function(){
		song.src = this.getAttribute("data-sound");
		video.src = this.getAttribute("data-video");
		if(!song.pause){
			song.play();
			video.play();
		}
	});
});

timeButton.forEach(button =>{
	button.addEventListener("click",function () {
		fakeduration = this.getAttribute("data-time");
		timeDisplay.textContent = formatTime(fakeDuration);

	});
});

song.ontimeUpdate = function(){
	let currenttime = song.currenttime;
	let elasped = fakeduration - currenttime;
	let seconds = Math.floor(elasped % 60);
	let minutes - Math.floor(elasped /60);

	if(seconds < 10) seconds = "0" + seconds ;
	  timeDisplay.textContent = `${minutes}:${seconds}`;

	if(currenttime >= fakeduration){
		song.pause();
		song.currenttime = 0;
		video.pause();
		playBtn.src = "play.svg";
	}
	
};

function formattime(time){
	let seconds = Math.floor(time%60);
	let minutes = Math.floor(time/60);
	if(seconds < 10) seconds = "0" + seconds;
	return `${minutes}:${seconds}`;
}



