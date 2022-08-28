import "./index.html";
import "./scss/style.scss";
import "./data/tilt";
import "./data/shuffleCards";
import unmutedIcon from "./assets/icons/unmuted.png";
import mutedIcon from "./assets/icons/muted.png";
import sound from "./sounds/dark_cthulhu_music.mp3";

const muteButton = document.querySelector(".mute-button");

const audio = new Audio();
let isPlay = false;

window.addEventListener("load", () => {
    const mainCotainer = document.querySelector(".container");
    const preloader = document.querySelector(".preloader");
    setTimeout(() => {
        mainCotainer.style.opacity = "1";
        mainCotainer.style.pointerEvents = "all";
        preloader.style.display = "none";
    }, 2900);
    setTimeout(() => {
        playAudio();
    }, 3000);
});

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
