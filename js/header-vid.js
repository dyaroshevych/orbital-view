const video = document.querySelector("#header-bg-vid"),
  videoContainer = document.querySelector(".header__video-container");

video.play();

const setVideoHeight = () => {
  videoContainer.style.height = header.offsetHeight + "px";
};

setVideoHeight();

window.onresize = setVideoHeight;
