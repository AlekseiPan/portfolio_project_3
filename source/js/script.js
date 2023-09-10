/* Реализация меню с помощью js */

const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", () => {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

/* Смена языка при нажатии на кнопку */

const languageButton = document.querySelector(".main-nav__button-language");
const captionLanguageButton = languageButton.querySelector(
  ".main-nav__button-language-caption"
);

languageButton.addEventListener("click", () => {
  if (captionLanguageButton.textContent === "En") {
    captionLanguageButton.textContent = "Ru";
  } else {
    captionLanguageButton.textContent = "En";
  }
});
