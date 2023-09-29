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


const choices = ["roman", "pascual", "pepito"];
function getComputerChoice() {
  while (playerScore < 5 && computerScore < 5) {
    return choices[Math.floor(Math.random() * 3)];
  }
  return choices[randomNumber];
}

btn.forEach((button) => {
  if (playerScore < 5 && computerScore < 5) {
    button.addEventListener('click', () => {
      playRound(button.dataset.guinea, getComputerChoice());
    })
  }
});

function playRound(playerSelection, computerSelection) {
  computerChoice.innerHTML = "<p>Champion chose:</p>" + "<h2 class='" + computerSelection + "'>" + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + "</h2>" + "<img src='images/" + computerSelection + ".png' alt='" + computerSelection + "'>";
  if (playerScore >= 5 || computerScore >= 5) {
    return;
  }

  if (playerSelection === computerSelection) {
    result.innerText = "It's a tie!"
  } else if (playerSelection === "roman") {
    if (computerSelection === "pepito") {
      computerScore++;
      result.innerText = "You lose! Pepito beats Roman."
    } else {
      playerScore++;
      result.innerText = "You win! Roman beats Pascual."
    }
  } else if (playerSelection === "pascual") {
    if (computerSelection === "roman") {
      computerScore++;
      result.innerText = "You lose! Roman beats pascual."
    } else {
      playerScore++;
      result.innerText = "You win! Pascual beats Pepito."
    }
  } else if (playerSelection === "pepito") {
    if (computerSelection === "pascual") {
      computerScore++;
      result.innerText = "You lose! Pascual beats Pepito."
    } else {
      playerScore++;
      result.innerText = "You win! Pepito beats Roman."
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
  computerChoice.innerText = "";
  buttons.classList.remove('disabled');
});
