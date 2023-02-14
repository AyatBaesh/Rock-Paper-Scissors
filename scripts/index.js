import {getComputerChoice, getPlayerChoice} from "./getChoiceFunctions.js";

const rockPaperScissors = ["rock", "paper", "scissors"];

function round(playerChoice, computerChoice){
    //function to play 1 round and return the result
    
    if(playerChoice === "scissors" && computerChoice === "paper"){
        return "You win!";
    }

    else if (playerChoice === "scissors" && computerChoice === "rock"){
        return "You lose!";
    }

    else if(playerChoice === "rock" && computerChoice === "paper"){
        return "You lose!";
    }

    else if(playerChoice === "rock" && computerChoice === "scissors"){
        return "You win!";
    }

    else if(playerChoice === "paper" && computerChoice === "rock"){
        return "You win!";
    }

    else if(playerChoice === "paper" && computerChoice === "scissors"){
        return "You lose!";
    }
    
    else if (playerChoice === computerChoice){
        return "Tie game!"
    }
}

function game(){
    
    let roundWinner ="";
    let playerScore = 0;
    let computerScore = 0;
    while(playerScore < 5 && computerScore < 5){
        let computerChoice = getComputerChoice(rockPaperScissors);
        let playerChoice = getPlayerChoice();

        console.log(`computer choice: ${computerChoice}`);
        console.log(`player choice: ${playerChoice}`)
        roundWinner = round(playerChoice, computerChoice);

        if(roundWinner === "You win!"){
            
            playerScore++;
            console.log("PLAYER WON THIS ROUND!");
            console.log(`playerScore = ${playerScore}`);

        }else if(roundWinner === "You lose!"){
            
            computerScore++;
            console.log("COMPUTER WON THIS ROUND!");
            console.log(`computerScore = ${computerScore}`);

    } else{console.log("ROUND DRAW!")}   
    }
    if(computerScore === 5){
        console.log("You lost this game :(")
    }else if(playerScore === 5){
        console.log("You won this game!")
    }
    
}

game();