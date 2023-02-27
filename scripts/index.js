// import {getComputerChoice, round, game} from "./gameLogic.js";
const playerChoiceButtons = document.querySelectorAll(".player-choice");
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
const startButton = document.querySelector("#gameStart");


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


function playGame(playerChoiceButtons, computerScore, playerScore){
    let playerWinsCount = 0;
    let computerWinsCount = 0;
    let roundResult = "";
    playerChoiceButtons.forEach(chosenButton => {
        chosenButton.addEventListener("click", () =>{
            roundResult = round(chosenButton.value, getComputerChoice());
            switch(roundResult){
                default:
                        console.log("Something wrong, I can feel it...");
                        break;
                
                case "Tie game!":
                    console.log("Round draw!");
                    break;
                
                case "player":
                    playerWinsCount++;
                    playerScore.textContent = playerWinsCount;
                    console.log("PLAYER WON THIS ROUND!");
                    console.log(`playerScore = ${playerWinsCount}`);
                    break;
                
                case "computer":
                    computerWinsCount++;
                    computerScore.textContent = computerWinsCount;
                    console.log("COMPUTER WON THIS ROUND!");
                    console.log(`computerScore = ${computerWinsCount}`);
                    break;
            }

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
startButton.addEventListener("click", ()=>{
    playerChoiceButtons.forEach(chosenButton => {
        chosenButton.disabled = false;
        
    });
    playGame(playerChoiceButtons, computerScore, playerScore);
});














































// playerChoiceButtons.forEach(chosenButton => {
//     chosenButton.addEventListener("click", () => {
//         chosenButton.disabled = false;
//         let roundResult = round(chosenButton.value, getComputerChoice(rockPaperScissors));
    //     switch(roundResult){
    //         default:
    //                 console.log("Something wrong, I can feel it...");
    //                 break;
        
    //         case "Tie game!":
    //             console.log("Round draw!");
    //             break;
        
    //         case "player":
    //             playerWinsCount++;
    //             playerScore.textContent = playerWinsCount;
    //             console.log("PLAYER WON THIS ROUND!");
    //             console.log(`playerScore = ${playerWinsCount}`);
    //             break;
        
    //         case "computer":
    //             computerWinsCount++;
    //             computerScore.textContent = computerWinsCount;
    //             console.log("COMPUTER WON THIS ROUND!");
    //             console.log(`computerScore = ${computerWinsCount}`);
    //             break;
    //     }

    // if(computerWinsCount === 5){
    //     console.log("You lost this game :(");
    //     playerWinsCount = 0;
    //     computerWinsCount = 0;
    //     playerScore.textContent = playerWinsCount;
    //     computerScore.textContent = computerWinsCount;
    //     playerChoiceButtons.forEach(chosenButton => {
    //     chosenButton.disabled = true;
    // });
    //     return;
    // }else if(playerWinsCount === 5){
    //     console.log("You won this game!");
    //     playerWinsCount = 0;
    //     computerWinsCount = 0;
    //     playerScore.textContent = playerWinsCount;
    //     computerScore.textContent = computerWinsCount;
    //     playerChoiceButtons.forEach(chosenButton => {
    //         chosenButton.disabled = true;
    //     });
    //     return;
    // }
    // });
// })




// });
