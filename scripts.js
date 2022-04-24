// var c = 0,
//   p = 0;

// let computerPlay = function () {
//   const randomNumber = Math.floor(Math.random() * 3);

//   if (randomNumber == 0) {
//     return "rock";
//   }
//   if (randomNumber == 1) {
//     return "paper";
//   }
//   if (randomNumber == 2) {
//     return "scissors";
//   }
// };
// let user = function () {
//   let sign = prompt("Enter your selection: Rock,paper or scissors?");
//   return sign.toLowerCase();
// };
// function playRound(playerSelection, computerSelection) {
//   if (playerSelection == "rock" && computerSelection == "paper") {
//     c++;
//     return "You lose!Paper beats rock";
//   } else if (playerSelection == "paper" && computerSelection == "rock") {
//     p++;
//     return "You win!Paper beats rock";
//   } else if (playerSelection == "scissors" && computerSelection == "paper") {
//     p++;
//     return "You win!scissors beats paper";
//   } else if (playerSelection == "paper" && computerSelection == "scissors") {
//     c++;
//     return "You lose!scissors beats paper";
//   } else if (playerSelection == "rock" && computerSelection == "scissors") {
//     p++;
//     return "You win!rock beats scissors";
//   } else if (playerSelection == "scissors" && computerSelection == "rock") {
//     c++;
//     return "You lose!rock beats scissors";
//   } else if (playerSelection === computerSelection) {
//     return "Its a tie!";
//   } else {
//     return "Enter a valid selection";
//   }
// }

// function game() {
//   const playerSelection = user();
//   const computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection));

//   console.log("Final Scores:");
//   console.log("computer score=" + c);
//   console.log("Player's score=" + p);

//   if (c > p) {
//     console.log("you lose!");
//   } else if (c < p) {
//     console.log("You win!");
//   } else {
//     console.log("Game ends in tie!");
//   }
// }
// game();
