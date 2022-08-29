import "./index.html";
import "./scss/style.scss";
import "./data/tilt";
import "./data/shuffleCards";
import unmutedIcon from "./assets/icons/unmuted.png";
import mutedIcon from "./assets/icons/muted.png";
import sound from "./sounds/dark_cthulhu_music.mp3";

const muteButton = document.querySelector(".mute-button");
const continueButton = document.querySelector(".button-continue");
const mainContainer = document.querySelector(".container");
const preloader = document.querySelector(".preloader");

const audio = new Audio();
let isPlay = false;

window.addEventListener("load", () => {
    setTimeout(() => {
        continueButton.style.opacity = "1";
    }, 2500);
});

function enterToGame() {
    playAudio();
    mainContainer.style.opacity = "1";
    mainContainer.style.pointerEvents = "all";
    preloader.style.opacity = "0";
    preloader.style.pointerEvents = "none";
    setTimeout(() => {
        preloader.style.display = "none";
    }, 400);
}
continueButton.addEventListener("click", enterToGame);

function playAudio() {
    if (!isPlay) {
        audio.src = `${sound}`;
        audio.currentTime = 0;
        audio.volume = 0.5;
        audio.play();
        isPlay = true;
    } else {
        audio.pause();
        isPlay = false;
    }
}

function volumeControl() {
    audio.muted = !audio.muted;
    if (audio.muted) {
        muteButton.style.backgroundImage = `url(${mutedIcon})`;
    } else {
        muteButton.style.backgroundImage = `url(${unmutedIcon})`;
    }
}
muteButton.addEventListener("click", volumeControl);

audio.addEventListener("ended", () => {
    isPlay = false;
    playAudio();
});
