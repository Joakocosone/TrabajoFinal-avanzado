/*-----video-----*/
/*
var playButton = document.querySelector(".play");
var pauseButton = document.querySelector(".pause");
var video = document.querySelector(".video");

playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);

function playVideo() {
  video.play();
}

function pauseVideo() {
  video.pause();
}
 */
var playButton = document.querySelector(".play");
var pauseButton = document.querySelector(".pause");
var video = document.querySelector(".video");

playButton.addEventListener("click",()=>{
    video.play()
})
pauseButton.addEventListener("click",()=>{
    video.pause()
})