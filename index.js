import "./profile.js";

// Toggeln des ersten bookmarks.
const bookmark = document.querySelector('[data-js="bookmark"]');

bookmark.addEventListener("click", () => {
  if (bookmark.classList.contains("highlight")) {
    bookmark.classList.remove("highlight");
  } else {
    bookmark.classList.add("highlight");
  }
});
// toggeln des Show/Hide Buttons. Antwort wird sichtbar und textContent ändert sich beim Klicken.
const answerButton = document.querySelector(".answer-button");
const answer = document.querySelector("p.hidden");

answerButton.addEventListener("click", function () {
  answer.classList.toggle("hidden");
  if (answer.classList.contains("hidden")) {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
});
