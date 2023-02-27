


function getComputerChoice(){//making random computer choice
    const rockPaperScissors = ["rock", "paper", "scissors"];
    let randomElement = Math.floor(Math.random() * rockPaperScissors.length);

    return rockPaperScissors[randomElement];
}

function round(playerChoice, computerChoice){
    let roundWinner = "";
    //function to play 1 round and return the result
    switch(playerChoice + computerChoice){
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
function updateScore(scoreCounter, score){
    scoreCounter.textContent =  score;
}

function playGame(playerChoiceButtons, computerScore, playerScore, roundCount){
    let playerWinsCount = 0;
    let computerWinsCount = 0;
    let roundCounter = 0;
    let roundResult = "";
    playerChoiceButtons.forEach(chosenButton => {
        chosenButton.addEventListener("click", () =>{//waits for user choice and calls round()
            roundResult = round(chosenButton.value, getComputerChoice());
            switch(roundResult){//checks for roundResult and updates scores
                default:
                        console.log("Something wrong, I can feel it...");
                        break;
                
                case "Tie game!":
                    console.log("Round draw!");
                    break;
                
                case "player":
                    playerWinsCount++;
                    updateScore(playerScore, playerWinsCount);
                    console.log("PLAYER WON THIS ROUND!");
                    console.log(`playerScore = ${playerWinsCount}`);
                    break;
                
                case "computer":
                    computerWinsCount++;
                    updateScore(computerScore, computerWinsCount);
                    console.log("COMPUTER WON THIS ROUND!");
                    console.log(`computerScore = ${computerWinsCount}`);
                    break;
            }
            roundCounter++;
            roundCount.textContent = roundCounter;
            if(computerWinsCount === 5){
                console.log("You lost this game :(");
                computerWinsCount = 0;
                playerWinsCount = 0;
                playerScore.textContent = playerWinsCount;
                computerScore.textContent = computerWinsCount;
                return;

            }else if(playerWinsCount === 5){
                console.log("You won this game!");
                computerWinsCount = 0;
                playerWinsCount = 0;
                playerScore.textContent = playerWinsCount;
                computerScore.textContent = computerWinsCount;
                return;
        }
            
        });
        
    });

}
export{getComputerChoice,round, playGame}