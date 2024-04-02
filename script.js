"use strict";

//define secret number:
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    displayMessage("⛔️    No number!");
    //document.querySelector(".message").textContent = "⛔️    No number!";
  } else if (guess === 0) {
    displayMessage("Input number from 1 to 20!");
    // document.querySelector(".message").textContent =
    //   "Input number from 1 to 20!";
  } else if (guess > 20) {
    displayMessage("Input number from 1 to 20!");
    // document.querySelector(".message").textContent =
    //   "Input number from 1 to 20!";
  } else if (guess === secretNumber) {
    displayMessage("🎉    Correct Number!");
    //document.querySelector(".message").textContent = "🎉    Correct Number!";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".guess").style.backgroundColor = "#60b347";
    document.querySelector(".box").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too high" : "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥    You lost the game!");
      //document.querySelector(".message").textContent =
      //  "💥    You lost the game!";
    }
  }

  //   else if (guess > secretNumber) {
  //     if (score > 0) {
  //       document.querySelector(".message").textContent = "Too high";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent =
  //         "💥    You lost the game!";
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 0) {
  //       document.querySelector(".message").textContent = "Too low";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent =
  //         "💥    You lost the game!";
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".box").textContent = "?";
  displayMessage("Start Guessing ...");
  // document.querySelector(".message").textContent = "Start Guessing ...";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").style.backgroundColor = "#222";
  document.querySelector(".box").style.width = "15rem";
});
