var video = document.getElementById("myVideo");

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	console.log("Play video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
	console.log("Pause video");

});

document.querySelector("#slower").addEventListener("click", function() {
	var currentSpeed = video.playbackRate;
	video.playbackRate = .9 * (currentSpeed);
	console.log("Current speed: " + currentSpeed);
});


document.querySelector("#faster").addEventListener("click", function() {
	var currentSpeed = video.playbackRate;
	video.playbackRate = (currentSpeed) / .9;
	console.log("Current speed: " + currentSpeed);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 5 > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 5;
	}
	console.log("Skipped");
});

document.querySelector("#mute").addEventListener("click", function() {
	var muted = video.muted; 
	if (video.muted == true) {
		video.muted = false; 
		console.log("Video Unmuted");
		this.innerHTML = "Mute";
	}
	else {
		video.muted = true; 
		console.log("Video Muted");
		this.innerHTML = "Unmute";
	}
});


document.querySelector("#volumeSlider").addEventListener("change", function(event) {
	video.volume = event.currentTarget.value / 100;
	console.log("Volume is: " + video.volume);
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime"); 
	console.log("Video changed to old school");
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime"); 
	console.log("Video changed to original");
});



