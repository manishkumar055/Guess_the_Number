"use strict";
// const check = document.querySelector(".check");

// check.addEventListener("click", function () {
//   console.log(document.querySelector(".guess").value);
// });
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🍕Congrats";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// console.log(secretNumber);
let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ Not a Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🍕Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "35rem";
    let Highscore = document.querySelector(".highscore").textContent;
    if (Highscore < score) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 To high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You Lost the Game BSDK 😟 !";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 To low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You Lost the Game BSDK 😟 !";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
