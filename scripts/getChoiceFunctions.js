

function getPlayerChoice(){ 
    let playerInput = prompt("Please choose: Rock, Scissors or Paper?");
    let formattedPlayerInput = playerInput.toLowerCase();//making user's input case insensible
if(//checking user's input to be correct
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

function getComputerChoice(rockPaperScissors){//making random computer choice
    let randomElement = Math.floor(Math.random() * rockPaperScissors.length);

    return rockPaperScissors[randomElement];
}

export{getComputerChoice, getPlayerChoice} 