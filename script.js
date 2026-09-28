// =========================
// FLASHCARD DATA
// =========================

const flashcards = [
    {
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language"
    },
    {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets"
    },
    {
        question: "What is JavaScript used for?",
        answer: "Adding interactivity and dynamic behavior to web pages."
    },
    {
        question: "What is the DOM?",
        answer: "Document Object Model — a programming interface for HTML documents."
    },
    {
        question: "Which keyword declares a constant in JavaScript?",
        answer: "The const keyword."
    },
    {
        question: "What is an array?",
        answer: "A data structure used to store multiple values in a single variable."
    },
    {
        question: "What does API stand for?",
        answer: "Application Programming Interface"
    },
    {
        question: "What is responsive web design?",
        answer: "A design approach that makes websites adapt to different screen sizes."
    },
    {
        question: "Which CSS property changes text color?",
        answer: "The color property."
    },
    {
        question: "Which JavaScript method adds an item to the end of an array?",
        answer: "The push() method."
    }
];


// =========================
// DOM ELEMENTS
// =========================

const flashcardContainer = document.getElementById("flashcard");

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


// =========================
// CURRENT CARD
// =========================

let currentIndex = 0;


// =========================
// DISPLAY CARD
// =========================

function displayCard() {

    const currentCard = flashcards[currentIndex];

    const progressPercentage =
    ((currentIndex + 1) / flashcards.length) * 100;

progressFill.style.width = `${progressPercentage}%`;

    questionElement.textContent = currentCard.question;
    answerElement.textContent = currentCard.answer;

    progressText.textContent =
        `Card ${currentIndex + 1} of ${flashcards.length}`;

    // Reset flip when changing card
    flashcardContainer.classList.remove("flipped");

    // Disable Previous on first card
    prevBtn.disabled = currentIndex === 0;

    // Disable Next on last card
    nextBtn.disabled = currentIndex === flashcards.length - 1;
}


// =========================
// FLIP CARD
// =========================

flashcardContainer.addEventListener("click", function () {
    flashcardContainer.classList.toggle("flipped");
});


// =========================
// NEXT BUTTON
// =========================

nextBtn.addEventListener("click", function () {

    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        displayCard();
    }

});


// =========================
// PREVIOUS BUTTON
// =========================

prevBtn.addEventListener("click", function () {

    if (currentIndex > 0) {
        currentIndex--;
        displayCard();
    }

});


// =========================
// INITIAL DISPLAY
// =========================

displayCard();