const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const displayDiv = document.createElement('div');

body.appendChild(displayDiv);

const score = document.createElement('p');
const results = document.createElement('p');
const endmessage = document.createElement('p');

displayDiv.appendChild(results);
displayDiv.appendChild(score);


let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => button.addEventListener('click', playRound));




function playRound(choice){
let computerSelection = getComputerChoice();
let playerSelection = capitalize(this.classList.value);


  if(playerSelection === computerSelection){
    results.textContent = "Tie!";
    score.textContent = `SCORE: Player ${playerScore} - Computer ${computerScore}`;
  }

  else if((playerSelection === "Rock" && computerSelection == "Scissors") || (playerSelection === "Paper" && computerSelection == "Rock") 
    || (playerSelection === "Scissors" && computerSelection == "Paper")){
        results.textContent = `${playerSelection} beats ${computerSelection}! You win this round!`;
        playerScore++;
        score.textContent = `SCORE: Player ${playerScore} - Computer ${computerScore}`;
   }

  else {
        results.textContent = `${computerSelection} beats ${playerSelection}! You lose this round!`;
        computerScore++;
        score.textContent = `SCORE: Player ${playerScore} - Computer ${computerScore}`;
    }

    if (playerScore > 4 || computerScore > 4){

      buttons.forEach(button => button.removeEventListener('click', playRound));

      if(playerScore > computerScore){
      results.textContent =`YOU WIN THE GAME!`;
      score.textContent = `SCORE: ${playerScore} - ${computerScore}`;
      }
      else{
        results.textContent =`YOU LOSE THE GAME!`
        score.textContent = `SCORE: ${playerScore} - ${computerScore}`;
      }
    }
}


function capitalize(choice){
    let chosen = false;
    let selection = choice;
    let firstLetter = "None";
    let capLetter = "None";
    

    firstLetter = selection.charAt(0);
    capLetter = firstLetter.toUpperCase(),
    selection = selection.replace(firstLetter, capLetter);
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

