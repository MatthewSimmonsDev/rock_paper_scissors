const buttons = document.querySelectorAll("button");
const playerSelection = document.querySelector("#playerchoice");
const cpuSelection = document.querySelector("#cpuchoice");
const results = document.querySelector("#results");
const points = document.querySelector("#points");

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerChoice = button.id;
    playerSelection.textContent = "You chose: " + playerChoice;
    playGame();
  })
})


// Declare Variables
let playerPoints = 0;
let cpuPoints = 0;


function winner(){
  results.textContent = "You Win";
  playerPoints++;
  points.textContent = `You have ${playerPoints} point(s) and the computer has ${cpuPoints} point(s)`;
}

// pick randomly a value 0 - 2
function randomizer(){
 return Math.floor(Math.random() * 3);
}


// Play Game Function
function playGame(){

  //assign variable to random choice
  let cpuChoice = randomizer();
  
  // switch statement to convert number to readable selection
  switch(cpuChoice){
    case 0:
      selection = "rock";
      break;
    case 1:
      selection = "paper";
      break;
    case 2:
      selection = "scissors"
      break;
    default:
      selection = "error"
  }
  
  console.log(selection);
  cpuSelection.textContent = "The CPU chose: " + selection;
  
  // Determine point allocation
  if (selection === playerChoice){
    results.textContent = "Tie";
    points.textContent = `You have ${playerPoints} point(s) and the computer has ${cpuPoints} point(s)`;
  }
  else if(playerChoice === "rock" && selection === "scissors"){
    winner();
  }
  else if(playerChoice === "paper" && selection === "rock"){
    winner();
  }
  else if(playerChoice === "scissors" && selection === "paper"){
    winner();
  }
  else {
    results.textContent = "You lose";
    cpuPoints++;
    points.textContent = `You have ${playerPoints} point(s) and the computer has ${cpuPoints} point(s)`;
  }

  if (playerPoints === 5){
    results.textContent = "You win with 5 points!  Good job!"
    playerPoints = 0;
    cpuPoints = 0;


  }
  else if (cpuPoints === 5){
    results.textContent = "You lose to the CPU, how unlucky!"
    cpuPoints = 0;
    playerPoints = 0;
  }
  
}


