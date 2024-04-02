"use strict";

//define secret number:
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".box").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number!";
  } else if (guess === 0) {
    document.querySelector(".message").textContent =
      "Input number from 1 to 20!";
  } else if (guess > 20) {
    document.querySelector(".message").textContent =
      "Input number from 1 to 20!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
  }
});
