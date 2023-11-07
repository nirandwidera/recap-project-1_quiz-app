console.clear();

const question = "In which year did the First World War end?";
const answer = "1918";
const tag = "#worldwar";

const form = document.querySelector("form");
const submitButton = document.querySelector('[data-js="submit-button"]');

// Add an event listener to the form's submit event
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const questionInput = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const tagInput = document.getElementById("tag");

  const question = questionInput.value;
  const answer = answerInput.value;
  const tag = tagInput.value;

  const newQuestion = document.createElement("article");
  newQuestion.classList.add("question-box");

  newQuestion.innerHTML = `
    <span class="bookmarks">
      <i class="fa-solid fa-bookmark" data-js="bookmark"></i>
    </span>
    <h2>${question}</h2>
    <p>${tag}</p>
    <button class="answer-button">Show answer</button>
    <p class="hidden"><b>Answer:</b>${answer}</p>
  `;

  form.append(newQuestion);

  // Clear the input fields after submit click event!
  questionInput.value = "";
  answerInput.value = "";
  tagInput.value = "";
});

// Anzeige der verbleibenden Zeichen in den Text Input Feldern.

const questionInput = document.querySelector('[data-js="question-input"]');
const answerInput = document.querySelector('[data-js="answer-input"]');

const remainingCharacters1 = document.querySelector(
  '[data-js="remainingCharacters1"]'
);
const remainingCharacters2 = document.querySelector(
  '[data-js="remainingCharacters2"]'
);

const maxLength1 = questionInput.getAttribute("maxlength"); // Hier lässt sich die eingestellte maxlength im HTML Code ziehen. Aktuell 150 Zeichen.
const maxLength2 = answerInput.getAttribute("maxlength"); // Hiermit könnte ich allerdings 2 verschiedene maxlength für die textareas definieren.
// Einmal für das Question Textfeld und einmal für das Antwort Textfeld.

const updateAmountLeft1 = (value) => {
  remainingCharacters1.innerText = value;
};

const updateAmountLeft2 = (value) => {
  remainingCharacters2.innerText = value;
};

updateAmountLeft1(maxLength1);
updateAmountLeft2(maxLength2);

questionInput.addEventListener("input", () => {
  updateAmountLeft1(maxLength1 - questionInput.value.length);
});

answerInput.addEventListener("input", () => {
  updateAmountLeft2(maxLength2 - answerInput.value.length);
});
