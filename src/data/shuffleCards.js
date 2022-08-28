import ancientsData from "./ancients";
import { brownCards, blueCards, greenCards } from "./mythicCards/index";

const closedCards = document.querySelector(".closed-cards");
const openCards = document.querySelector(".open-cards");
const cell = document.querySelectorAll(".cell");
const ancients = document.querySelectorAll(".ancient-card");
const difficulties = document.querySelector(".difficult-container");
const difficultiesArray = document.querySelectorAll(".difficult-button");
const shuffle = document.querySelector(".shuffle-wrapper");
const stages = document.querySelector(".stages-container");
const board = document.querySelector(".board-container");

let isAncient = null; // приходит индекс массива ancients
let isDifficulty = "";
let arrayCards = [];
let firstStage;
let secondStage;
let thirdStage;

shuffle.addEventListener("click", () => {
    stages.classList.add("active");
    board.classList.add("active");
    shuffle.classList.remove("active");
    arrayCards = [
        ...Object.values(ancientsData[isAncient].firstStage),
        ...Object.values(ancientsData[isAncient].secondStage),
        ...Object.values(ancientsData[isAncient].thirdStage),
    ];
    getCards();
    spreadCards();
});

// checks states for start shuffle the cards.
function showShuffleButton() {
    if (isDifficulty && typeof isAncient === "number") {
        shuffle.classList.add("active");
        stages.classList.remove("active");
        board.classList.remove("active");
    }
}

function randomGreenCards() {
    let sum =
        ancientsData[isAncient].firstStage.greenCards +
        ancientsData[isAncient].secondStage.greenCards +
        ancientsData[isAncient].thirdStage.greenCards;
    let easyFilter = greenCards
        .filter((level) => level.difficulty === "easy")
        .sort(() => Math.round(Math.random() * 100) - 50);
    let normalFilter = greenCards
        .filter((level) => level.difficulty === "normal")
        .sort(() => Math.round(Math.random() * 100) - 50);
    let hardFilter = greenCards
        .filter((level) => level.difficulty === "hard")
        .sort(() => Math.round(Math.random() * 100) - 50);

    let difference;
    let resultArray = greenCards.sort(() => Math.round(Math.random() * 100) - 50);
    console.log(resultArray);

    if (isDifficulty === "veryEasy") {
        difference = sum - easyFilter.length;
        resultArray = [...easyFilter, ...normalFilter.slice(0, difference)];
    }
    if (isDifficulty === "easy") {
        resultArray = [...easyFilter, ...normalFilter].sort(
            () => Math.round(Math.random() * 100) - 50,
        );
    }
    if (isDifficulty === "hard") {
        resultArray = [...hardFilter, ...normalFilter].sort(
            () => Math.round(Math.random() * 100) - 50,
        );
    }
    if (isDifficulty === "veryHard") {
        difference = sum - hardFilter.length;
        resultArray = [...hardFilter, ...normalFilter.slice(0, difference)];
    }
    let result = resultArray;
    return result.slice(0, sum).sort(() => Math.round(Math.random() * 100) - 50);
}
function randomBlueCards() {
    let sum =
        ancientsData[isAncient].firstStage.blueCards +
        ancientsData[isAncient].secondStage.blueCards +
        ancientsData[isAncient].thirdStage.blueCards;
    let easyFilter = blueCards
        .filter((level) => level.difficulty === "easy")
        .sort(() => Math.round(Math.random() * 100) - 50);
    let normalFilter = blueCards
        .filter((level) => level.difficulty === "normal")
        .sort(() => Math.round(Math.random() * 100) - 50);
    let hardFilter = blueCards
        .filter((level) => level.difficulty === "hard")
        .sort(() => Math.round(Math.random() * 100) - 50);
    let difference;
    let resultArray = blueCards.sort(() => Math.round(Math.random() * 100) - 50);
    if (isDifficulty === "veryEasy") {
        difference = sum - easyFilter.length;
        resultArray = [...easyFilter, ...normalFilter.slice(0, difference)];
    }
    if (isDifficulty === "easy") {
        resultArray = [...easyFilter, ...normalFilter].sort(
            () => Math.round(Math.random() * 100) - 50,
        );
    }
    if (isDifficulty === "hard") {
        resultArray = [...hardFilter, ...normalFilter].sort(
            () => Math.round(Math.random() * 100) - 50,
        );
    }
    if (isDifficulty === "veryHard") {
        difference = sum - hardFilter.length;
        resultArray = [...hardFilter, ...normalFilter.slice(0, difference)];
    }
    let result = resultArray;
    return result.slice(0, sum).sort(() => Math.round(Math.random() * 100) - 50);
}
function randomBrownCards() {
    let sum =
        ancientsData[isAncient].firstStage.brownCards +
        ancientsData[isAncient].secondStage.brownCards +
        ancientsData[isAncient].thirdStage.brownCards;
    let easyFilter = brownCards
        .filter((level) => level.difficulty === "easy")
        .sort(() => Math.round(Math.random() * 100) - 50);
    let normalFilter = brownCards
        .filter((level) => level.difficulty === "normal")
        .sort(() => Math.round(Math.random() * 100) - 50);
    let hardFilter = brownCards
        .filter((level) => level.difficulty === "hard")
        .sort(() => Math.round(Math.random() * 100) - 50);
    let difference;
    let resultArray = brownCards.sort(() => Math.round(Math.random() * 100) - 50);
    if (isDifficulty === "veryEasy") {
        difference = sum - easyFilter.length;
        resultArray = [...easyFilter, ...normalFilter.slice(0, difference)];
    }
    if (isDifficulty === "easy") {
        resultArray = [...easyFilter, ...normalFilter].sort(
            () => Math.round(Math.random() * 100) - 50,
        );
    }
    if (isDifficulty === "hard") {
        resultArray = [...hardFilter, ...normalFilter].sort(
            () => Math.round(Math.random() * 100) - 50,
        );
    }
    if (isDifficulty === "veryHard") {
        difference = sum - hardFilter.length;
        resultArray = [...hardFilter, ...normalFilter.slice(0, difference)];
    }
    let result = resultArray;
    return result.slice(0, sum).sort(() => Math.round(Math.random() * 100) - 50);
}

function getCards() {
    let green = randomGreenCards();
    let brown = randomBrownCards();
    let blue = randomBlueCards();
    let firstGreen = ancientsData[isAncient].firstStage.greenCards;
    let secondGreen = ancientsData[isAncient].secondStage.greenCards + firstGreen;
    let thirdGreen = ancientsData[isAncient].thirdStage.greenCards + secondGreen;
    let firstBlue = ancientsData[isAncient].firstStage.blueCards;
    let secondBlue = ancientsData[isAncient].secondStage.blueCards + firstBlue;
    let thirdBlue = ancientsData[isAncient].thirdStage.blueCards + secondBlue;
    let firstBrown = ancientsData[isAncient].firstStage.brownCards;
    let secondBrown = ancientsData[isAncient].secondStage.brownCards + firstBrown;
    let thirdBrown = ancientsData[isAncient].thirdStage.brownCards + secondBrown;
    firstStage = [
        ...green.slice(0, firstGreen),
        ...brown.slice(0, firstBrown),
        ...blue.slice(0, firstBlue),
    ].sort(() => Math.round(Math.random() * 100) - 50);
    secondStage = [
        ...green.slice(firstGreen, secondGreen),
        ...brown.slice(firstBrown, secondBrown),
        ...blue.slice(firstBlue, secondBlue),
    ].sort(() => Math.round(Math.random() * 100) - 50);
    thirdStage = [
        ...green.slice(secondGreen, thirdGreen),
        ...brown.slice(secondBrown, thirdBrown),
        ...blue.slice(secondBlue, thirdBlue),
    ].sort(() => Math.round(Math.random() * 100) - 50);
    console.log(firstStage, secondStage, thirdStage);
}

// sort current cards quantity accroding to the Ancient and ramaining card in deck.
function spreadCards() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].textContent = arrayCards[i];
    }
}

// function gives smooth loading of images when picking up the card.
function smoothImageLoading(imageSrc) {
    let img = new Image();
    img.src = `${imageSrc}`;
    img.onload = () => {
        openCards.style.backgroundImage = `url(${img.src})`;
    };
}

function takeCard() {
    if (firstStage.length > 0) {
        smoothImageLoading(firstStage[0].cardFace);
        if (firstStage[0].color === "green") arrayCards[0] -= 1;
        if (firstStage[0].color === "brown") arrayCards[1] -= 1;
        if (firstStage[0].color === "blue") arrayCards[2] -= 1;
        firstStage.shift();
    } else if (secondStage.length > 0) {
        smoothImageLoading(secondStage[0].cardFace);
        if (secondStage[0].color === "green") arrayCards[3] -= 1;
        if (secondStage[0].color === "brown") arrayCards[4] -= 1;
        if (secondStage[0].color === "blue") arrayCards[5] -= 1;
        secondStage.shift();
    } else if (thirdStage.length > 0) {
        smoothImageLoading(thirdStage[0].cardFace);
        if (thirdStage[0].color === "green") arrayCards[6] -= 1;
        if (thirdStage[0].color === "brown") arrayCards[7] -= 1;
        if (thirdStage[0].color === "blue") arrayCards[8] -= 1;
        thirdStage.shift();
    }
    if (thirdStage.length === 0) {
        closedCards.style.opacity = 0;
    }
    openCards.style.opacity = 1;
    spreadCards();
}
closedCards.addEventListener("click", takeCard);

// ancients cards listener
ancients.forEach((card) => {
    card.addEventListener("click", selectedAncient);
});

// removing select class from unactive ancients
function removeSelect() {
    ancients.forEach((card) => {
        card.classList.remove("select");
    });
}

// adding unselect class to rest ancient cards.
function hideUnselected() {
    ancients.forEach((card) => {
        if (!card.classList.contains("select")) {
            card.classList.add("unselect");
        } else {
            card.classList.remove("unselect");
        }
    });
}

function selectedAncient(event) {
    if (event.target.id === "azathoth") {
        isAncient = 0;
    }
    if (event.target.id === "cthulthu") {
        isAncient = 1;
    }
    if (event.target.id === "iogSothoth") {
        isAncient = 2;
    }
    if (event.target.id === "snubNiggurath") {
        isAncient = 3;
    }
    removeSelect();
    event.target.classList.add("select");
    hideUnselected();
    openCards.style.opacity = 0;
    closedCards.style.opacity = 1;
    showShuffleButton();
}

// removing active status of button.
function removeActiveDifficult() {
    difficultiesArray.forEach((button) => {
        button.classList.remove("active");
    });
}

// choosing difficulty
difficulties.addEventListener("click", (event) => {
    removeActiveDifficult();
    if (event.target.id === "veryEasy") {
        event.target.classList.add("active");
        isDifficulty = "veryEasy";
    }
    if (event.target.id === "easy") {
        event.target.classList.add("active");
        isDifficulty = "easy";
    }
    if (event.target.id === "normal") {
        event.target.classList.add("active");
        isDifficulty = "normal";
    }
    if (event.target.id === "hard") {
        event.target.classList.add("active");
        isDifficulty = "hard";
    }
    if (event.target.id === "veryHard") {
        event.target.classList.add("active");
        isDifficulty = "veryHard";
    }
    openCards.style.opacity = 0;
    closedCards.style.opacity = 1;
    showShuffleButton();
    console.log(`You have choosed ${isDifficulty} difficult!`);
});
