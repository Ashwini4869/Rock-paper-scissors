let computerPlay = function () {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 0) {
    return "rock";
  }
  if (randomNumber == 1) {
    return "paper";
  }
  if (randomNumber == 2) {
    return "scissors";
  }
};
let user = function () {
  let sign = prompt("Enter your selection:");
  return sign.toLowerCase();
};
function playRound(playerSelection, computerSelection) {
  if ((playerSelection == "rock") && (computerSelection == "paper")) {
    return "You lose!Paper beats rock";
  } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
    return "You win!Paper beats rock";
  } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
    return "You win!scissors beats paper";
  } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
    return "You lose!scissors beats paper";
  } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
    return "You win!rock beats scissors";
  } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
    return "You lose!rock beats scissors";
  } else if ((playerSelection === computerSelection)) 
  {
    return "Its a tie!";
  }
  else{
    return "Enter a valid selection";
  }
}

const playerSelection = user();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
