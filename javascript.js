
game();

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let winResult = false;
    for(let i = 0; i < 5; i++){
        winResult = false;
        winResult = playRound();
        if(winResult === true)
        {
            playerScore++;
        }
        else{
            computerScore++;
        }
        console.log(`SCORE: ${playerScore} - ${computerScore}`)
    }
    if(playerScore > computerScore){
        console.log(`YOU WIN THE GAME! SCORE: ${playerScore} - ${computerScore}`)
    }
    else{
        console.log(`YOU LOSE THE GAME! SCORE: ${playerScore} - ${computerScore}`)
    }
}

function playRound(){
let winnerDetermined = false;
let computerSelection = "Nothing";
let playerSelection = "Nothing";
let playerWin = false;


while(winnerDetermined === false){
  computerSelection = getComputerChoice();
  playerSelection = getUserChoice();

  if(playerSelection === computerSelection){
    console.log("Tie!");
    }
    else if((playerSelection === "Rock" && computerSelection == "Scissors") || (playerSelection === "Paper" && computerSelection == "Rock") 
    || (playerSelection === "Scissors" && computerSelection == "Paper")){
        console.log(`${playerSelection} beats ${computerSelection}! You win this round!`);
        winnerDetermined = true;
        playerWin = true;
    }
    else {
        console.log(`${computerSelection} beats ${playerSelection}! You lose this round!`);
        winnerDetermined = true;
    }
  }
  return playerWin;
}


function getUserChoice(){
    let chosen = false;
    let selection = "NOCHOICE";
    let firstLetter = "None";
    let capLetter = "None";
    

    while(chosen === false){
      selection = prompt("Choose Rock, Scissors, or Paper");
      selection = selection.toLowerCase();
      if (selection === "rock" || selection === "scissors" || selection === "paper" ){
        chosen = true;
      }
    }
    firstLetter = selection.charAt(0);
    capLetter = firstLetter.toUpperCase(),
    selection = selection.replace(firstLetter, capLetter);
    console.log(selection);
    return selection;
}



function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3) + 1;
    let choice = "Nothing";
    if (randomNum === 1){
        choice = "Rock";

    }
    else if (randomNum === 2){
        choice = "Scissors";
    }
    else{
        choice = "Paper";
    }
    return choice;
}
