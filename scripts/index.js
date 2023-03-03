// DOM elements
const computerScoreEl = document.querySelector("#computerScore");
const playerScoreEl = document.querySelector("#playerScore");
const roundsPlayedEl = document.querySelector("#roundCounter");
const choiceButtons = document.querySelectorAll(".player-choice");
const gameResultsSection = document.querySelector(".game-results");
const newGameButton = document.querySelector("#newGame");

// Game state variables
let computerScore = 0;
let playerScore = 0;
let roundCounter = 0;

// Generate a random choice for the computer
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// Play a single round and return the winner
function playRound(playerChoice, computerChoice) {
  let roundWinner = "";
  switch (playerChoice + computerChoice) {
    default:
      roundWinner = "Tie game!";
      break;
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      roundWinner = "player";
      break;
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      roundWinner = "computer";
      break;
  }
  return roundWinner;
}

// Update the game state and the DOM based on the round winner
function updateGame(roundWinner) {
  switch (roundWinner) {
    default:
      console.log("Something went wrong...");
      break;
    case "Tie game!":
      console.log("Draw");
      break;
    case "player":
      playerScore++;
      playerScoreEl.textContent = `Your score: ${playerScore}`;
      break;
    case "computer":
      computerScore++;
      computerScoreEl.textContent = `Computer score: ${computerScore}`;
      break;
  }
  roundCounter++;
  roundsPlayedEl.textContent = `Rounds played: ${roundCounter}`;

  // Check for end of game
  if (playerScore === 5) {
    showGameOverMessage("You won!");
  } else if (computerScore === 5) {
    showGameOverMessage("You lost :(");
  }
}
// Enable/disable the choice buttons
function disableButtons(buttons) {
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
  
function enableButtons(buttons) {
  buttons.forEach((button) => {
    button.disabled = false;
  });
}

// Show the game over message and disable the choice buttons
function showGameOverMessage(message) {
  const gameOverEl = document.createElement("span");
  gameOverEl.classList.add("game-over");
  gameOverEl.textContent = message;
  gameResultsSection.insertBefore(gameOverEl, newGameButton);
  disableButtons(choiceButtons);
  newGameButton.style.visibility = "visible";
}



// Start a new game
function startNewGame() {
  computerScore = 0;
  playerScore = 0;
  roundCounter = 0;
  computerScoreEl.textContent = `Computer score: ${computerScore}`;
  playerScoreEl.textContent = `Your score: ${playerScore}`;
  roundsPlayedEl.textContent = `Rounds played: ${roundCounter}`;
  gameResultsSection.removeChild(document.querySelector(".game-over"));
  enableButtons(choiceButtons);
  newGameButton.style.visibility = "hidden";
}

// Event listeners
choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const roundWinner = playRound(button.value, getComputerChoice());
    updateGame(roundWinner);
  });
});

newGameButton.addEventListener("click", startNewGame);


