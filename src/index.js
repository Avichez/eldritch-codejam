import "./index.html";
import "./scss/style.scss";

const ancients = document.querySelectorAll(".ancient-card");

ancients.forEach((card) => {
    card.addEventListener("click", activeAncient);
});

function activeAncient(event) {
    removeSelect();
    hideUnselected();
    event.target.classList.remove("unselect");
    event.target.classList.add("select");
}

function removeSelect() {
    ancients.forEach((card) => {
        card.classList.remove("select");
    });
}

function hideUnselected() {
    ancients.forEach((card) => {
        if (!card.classList.contains("select")) {
            card.classList.add("unselect");
        }
    });
}
