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
/*
setInterval(()=>{
  let  tiempoActual= video.currentTime.toFixed(0);
  document.querySelector(".duracion-video").textContent= `segundos transcurridos=> ${tiempoActual}`
})*/
setInterval(() => {
  let tiempoActual = video.currentTime.toFixed(0);
  let minutos = Math.floor(tiempoActual /60); 
  let segundos = tiempoActual %60; 
  document.querySelector(".duracion-video").textContent = `Tiempo transcurrido: ${minutos}:${segundos}`;
});
