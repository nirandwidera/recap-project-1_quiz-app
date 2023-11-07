// Toggeln / Dark Mode.
const toggleButton = document.querySelector('[data-js="toggle"]');
const bodyElement = document.querySelector("body");

toggleButton.addEventListener("click", function () {
  if (body.classList.contains("darkgrey")) {
    body.classList.remove("darkgrey");
    toggleButton.textContent = "Dark mode off";
  } else {
    body.classList.add("darkgrey");
    toggleButton.textContent = "Dark mode on";
  }
});