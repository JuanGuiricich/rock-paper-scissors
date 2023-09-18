const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

let playerScore = 0;
let computerScore = 0;
function game() {
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return ("It's a tie!");
    } else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        computerScore++;
        return ("You lose! Paper beats rock.");
      } else {
        playerScore++;
        return ("You win! Rock beats scissors.");
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        computerScore++;
        return ("You lose! Scissors beats paper.");
      } else {
        playerScore++;
        return ("You win! Paper beats rock.");
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        computerScore++;
        return ("You lose! Rock beats scissors.");
      } else {
        playerScore++;
        return ("You win! Scissors beats paper.");
      }
    } else {
      return ("Invalid choice! Please try again.");
    }
  }
  while ((playerScore < 5) && (computerScore < 5)) {
    let playerSelection = prompt("Rock, Paper, or Scissors?").toLocaleLowerCase();
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  console.log("Player Score: " + playerScore);
  console.log("Computer Score: " + computerScore);
}
