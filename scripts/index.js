import {getComputerChoice, round, playGame} from "./gameLogic.js";
const playerChoiceButtons = document.querySelectorAll(".player-choice");
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let roundCount = document.querySelector("#roundCounter");
const startButton = document.querySelector("#gameStart");


startButton.addEventListener("click", ()=>{
    playerChoiceButtons.forEach(chosenButton => {
        chosenButton.disabled = false;
        
    });
    playGame(playerChoiceButtons, computerScore, playerScore, roundCount);
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
