// function getComputerChoice(){//making random computer choice
//     const rockPaperScissors = ["rock", "paper", "scissors"];
//     let randomElement = Math.floor(Math.random() * rockPaperScissors.length);

//     return rockPaperScissors[randomElement];
// }

// function round(playerChoice, computerChoice){
//     let roundWinner = "";
//     //function to play 1 round and return the result
//     switch(playerChoice + computerChoice){
//         default:
//             roundWinner = "Tie game!";
//             break;
//         case "scissorspaper":
//         case "rockscissors":
//         case "paperrock":
//             roundWinner = "player";
//             break;

//         case "scissorsrock":
//         case "rockpaper":
//         case "paperscissors":
//             roundWinner = "computer";
//             break;
//     }
//     return roundWinner;

// }

// function getPlayerChoice(playerChoiceButtons){
//     let playerChoice = "";
//     playerChoiceButtons.forEach(chosenButton  => {
//         chosenButton.disabled = false;
//         chosenButton.addEventListener("click", () =>{
//             playerChoice = chosenButton.value;
//         });
        
//     });
//     return playerChoice;
// }
// function game(playerChoiceButtons, playerScore, computerScore){
//     let playerWinsCount = 0;
//     let computerWinsCount = 0;
//     let playerChoice = getPlayerChoice(playerChoiceButtons);
//     let roundResult = round(playerChoice, getComputerChoice);

//         switch(roundResult){
//             default:
//                     console.log("Something wrong, I can feel it...");
//                     break;
        
//             case "Tie game!":
//                 console.log("Round draw!");
//                 break;
        
//             case "player":
//                 playerWinsCount++;
//                 playerScore.textContent = playerWinsCount;
//                 console.log("PLAYER WON THIS ROUND!");
//                 console.log(`playerScore = ${playerWinsCount}`);
//                 break;
        
//             case "computer":
//                 computerWinsCount++;
//                 computerScore.textContent = computerWinsCount;
//                 console.log("COMPUTER WON THIS ROUND!");
//                 console.log(`computerScore = ${computerWinsCount}`);
//                 break;
//         }
    
        

//     // if(computerWinsCount === 5){
//     //         console.log("You lost this game :(");

//     //         return;
//     //     }else if(playerWinsCount === 5){
//     //         console.log("You won this game!");

//     //         return;
//     //     }
    

//     }
// export{getComputerChoice, getPlayerChoice, round, game}