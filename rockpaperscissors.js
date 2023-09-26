let playerScore = 0;
let computerScore = 0;
const btn = document.querySelectorAll('#btn');
const buttons = document.querySelector('.buttons');
const result = document.querySelector('#result');
const player = document.querySelector('#playerScore');
const computer = document.querySelector('#computerScore');
const playerChoice = document.querySelector('#playerChoice');
const computerChoice = document.querySelector('#computerChoice');
const reset = document.querySelector('#reset');


const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

btn.forEach((button) => {
  if (playerScore < 5 && computerScore < 5) {
    button.addEventListener('click', () => {
      playRound(button.innerText.toLowerCase(), getComputerChoice());
    })
  }
});

function playRound(playerSelection, computerSelection) {
  playerChoice.innerText = "You chose : " + playerSelection;
  computerChoice.innerText = "Computer chose : " + computerSelection;
  if (playerScore >= 5 || computerScore >= 5) {
    return;
  }

  if (playerSelection === computerSelection) {
    result.innerText = "It's a tie!"
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      result.innerText = "You lose! Paper beats rock."
    } else {
      playerScore++;
      result.innerText = "You win! Rock beats scissors."
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      result.innerText = "You lose! Scissors beats paper."
    } else {
      playerScore++;
      result.innerText = "You win! Paper beats rock."
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      result.innerText = "You lose! Rock beats scissors."
    } else {
      playerScore++;
      result.innerText = "You win! Scissors beats paper."
    }
  } else {
    result.innerText = "Invalid choice! Please try again."
  }

  computer.innerText = "Computer Score : " + computerScore;
  player.innerText = "Player Score : " + playerScore;

  if (playerScore === 5 || computerScore === 5 ) {
    buttons.classList.add('disabled');
    reset.classList.remove('disabled');
    if (playerScore > computerScore) {
      result.innerText = "You win! Congratulations!"
    } else {
      result.innerText = "You lose! Better luck next time!"
    }
  }
}

reset.addEventListener('click', () => {
  reset.classList.add('disabled');
  playerScore = 0;
  computerScore = 0;
  computer.innerText = "Computer Score : " + computerScore;
  player.innerText = "Player Score : " + playerScore;
  result.innerText = "Let's play!";
  playerChoice.innerText = "";
  computerChoice.innerText = "";
  buttons.classList.remove('disabled');
});
