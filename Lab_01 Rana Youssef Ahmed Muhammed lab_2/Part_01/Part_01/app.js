const video = document.getElementById("vid1");
const playbackRange = document.getElementById("time-range");
const videoCurrentTime = document.getElementById("current-time");
const videoLength = document.getElementById("video-length");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const fastBackward = document.getElementById("fast-backward");
const backward = document.getElementById("backward");
const fastForward = document.getElementById("fast-forward");
const forward = document.getElementById("forward");
const sound = document.getElementById("sound");
const mute = document.getElementById("mute");
const speed = document.getElementById("speed");

// Handling Video Events
video.autoplay = true;
speed.value = 1
video.addEventListener("click", function (e) {
  video.pause();
});
playBtn.addEventListener("click", function (e) {
  video.play();
});
stopBtn.addEventListener("click", function (e) {
  video.pause();
});
fastBackward.addEventListener("click", function (e) {
  video.currentTime = 0;
  video.play();
  trackVideo();
});
backward.addEventListener("click", function (e) {
  video.currentTime -= 3;
  video.play();
  trackVideo();
});
fastForward.addEventListener("click", function (e) {
  video.currentTime = parseInt(video.duration);
  video.pause();
  trackVideo();
});
forward.addEventListener("click", function (e) {
  video.currentTime += 3;
  video.play();
  trackVideo();
});
mute.addEventListener("click", function (e) {
  if (!video.muted) {
    video.muted = true;
    sound.setAttribute("value", 0);
  } else {
    video.muted = false;
    sound.setAttribute("value", 1);
  }
});
speed.addEventListener("change", function (e) {
  video.playbackRate = speed.value;
  console.log(speed.value);
});

// Handling Play-Back Tracker
function trackVideo() {
  const timeNow = setInterval(() => {
    videoLength.innerHTML = parseInt(video.duration);
    videoCurrentTime.innerHTML = parseInt(video.currentTime);
    playbackRange.setAttribute("min", 0);
    playbackRange.setAttribute("value", parseInt(video.currentTime));
    playbackRange.setAttribute("max", parseInt(video.duration));
  }, 1000);
  if (parseInt(video.duration) === parseInt(video.currentTime)) {
    clearInterval(timeNow);
  }
}

trackVideo();
