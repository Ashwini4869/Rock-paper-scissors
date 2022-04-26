function computerSelection() {
  return Math.floor(Math.random() * 3);
}
//button selectors
const button1 = document.querySelector("button#b1");
const button2 = document.querySelector("button#b2");
const button3 = document.querySelector("button#b3");
const reset = document.querySelector("button#reset");
//score display
let pdisplay = document.querySelector("span#pScore");
let cdisplay = document.querySelector("span#cScore");

//variables
let pScore = 0,
  cScore = 0;
let winPoints = 5;
let gameOver = false;

button1.addEventListener("click", function () {
  if (!gameOver) {
    if (pScore < winPoints && cScore < winPoints) {
      //playerSelection=0 or rock
      if (computerSelection() == 1) {
        cScore++;
        cdisplay.textContent = cScore;
      } else if (computerSelection() == 2) {
        pScore++;
        pdisplay.textContent = pScore;
      }
    }
    if (pScore === winPoints) {
      document.querySelector("p#winner").textContent = "You Won!";
      gameOver = true;
    }
    if (cScore === winPoints) {
      document.querySelector("p#winner").textContent = "You Lose!";
      gameOver = true;
    }
  }
});

button2.addEventListener("click", function () {
  if (!gameOver) {
    if (pScore < winPoints && cScore < winPoints) {
      //playerSelection=1 or paper
      if (computerSelection() == 0) {
        pScore++;
        pdisplay.textContent = pScore;
      } else if (computerSelection() == 2) {
        cScore++;
        cdisplay.textContent = cScore;
      }
    }
    if (pScore === winPoints) {
      document.querySelector("p#winner").textContent = "You Won!";
      gameOver = true;
    }
    if (cScore === winPoints) {
      document.querySelector("p#winner").textContent = "You Lose!";
      gameOver = true;
    }
  }
});

button3.addEventListener("click", function () {
  if (!gameOver) {
    if (pScore < winPoints && cScore < winPoints) {
      //playerSelection=2 or scissors
      if (computerSelection() == 0) {
        cScore++;
        cdisplay.textContent = cScore;
      }
      if (computerSelection() == 1) {
        pScore++;
        pdisplay.textContent = pScore;
      }
    }
    if (pScore === winPoints) {
      document.querySelector("p#winner").textContent = "You Won!";
      gameOver = true;
    }
    if (cScore === winPoints) {
      document.querySelector("p#winner").textContent = "You Lose!";
      gameOver = true;
    }
  }
});

reset.addEventListener("click", function () {
  gameOver = false;
  pScore = 0;
  cScore = 0;
  pdisplay.textContent = pScore;
  cdisplay.textContent = cScore;
  document.querySelector("p#winner").textContent = "";
});
