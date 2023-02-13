const rockPaperScissors = ["rock", "paper", "scissors"];

//FUNCTIONS TO GET USER AND COMPUTER'S CHOISES

function getPlayerChoice(){
    let playerInput = prompt("Please choose: Rock, Scissors or Paper?");
    let formattedPlayerInput = playerInput.toLowerCase();
if(
    formattedPlayerInput != "rock"
    && formattedPlayerInput != "paper"
    && formattedPlayerInput != "scissors"){
    do{

        playerInput = prompt("You should choose from the list!");
        formattedPlayerInput = playerInput.toLowerCase();

    }while(
        formattedPlayerInput != "rock" 
        && formattedPlayerInput != "paper" 
        && formattedPlayerInput != "scissors"
      );
}
return formattedPlayerInput;
}

function getComputerChoice(rockPaperScissors){
    
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}
const computerChoice = getComputerChoice(rockPaperScissors);

function round(playerChoice, computerChoice){
    
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
    }else if (playerChoice === computerChoice){
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
            console.log("player won this round");
            console.log(`playerScore = ${playerScore}`);

        }else if(roundWinner === "You lose!"){
            
            computerScore++;
            console.log("computer won this round");
            console.log(`computerScore = ${computerScore}`);

    } else{console.log("Round draw!")}   
    }
    if(computerScore === 5){
        console.log("You lost this game :(")
    }else if(playerScore === 5){
        return "You won!"
    }
    
}
game();