"use strict";

//define secret number:
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔️    No number!";
  } else if (guess === 0) {
    document.querySelector(".message").textContent =
      "Input number from 1 to 20!";
  } else if (guess > 20) {
    document.querySelector(".message").textContent =
      "Input number from 1 to 20!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉    Correct Number!";
    document.querySelector(".Highscore").textContent = score;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".guess").style.backgroundColor = "#60b347";
    document.querySelector(".box").style.width = "30rem";
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥    You lost the game!";
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥    You lost the game!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".box").textContent = "?";
  document.querySelector(".message").textContent = "Start Guessing ...";
  document.querySelector(".number").value = "";
  document.querySelector(".score").textContent = score;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").style.backgroundColor = "#222";
  document.querySelector(".box").style.width = "15rem";
});
