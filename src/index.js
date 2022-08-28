import "./index.html";
import "./scss/style.scss";
import "./data/shuffleCards";

window.addEventListener("load", () => {
    const mainCotainer = document.querySelector(".container");
    const preloader = document.querySelector(".preloader");
    setTimeout(() => {
        mainCotainer.style.opacity = "1";
        mainCotainer.style.pointerEvents = "all";
    }, 2900);

    setTimeout(() => {
        preloader.style.display = "none";
    }, 2900);
});
