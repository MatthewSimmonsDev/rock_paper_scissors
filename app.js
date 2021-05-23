// pick randomly for the cpu rock, paper, scissors
  // pick randomly a value, assign value to rock, paper, scissors
// prompt user to enter selection
// compare selection to cpu
// declare winner
// play game 5 times


// Declare Variables
let playerPoints = 0;
let cpuPoints = 0;


function winner(){
  console.log("You Win");
  playerPoints++;
  console.log(`You have ${playerPoints} point(s) and the computer has ${cpuPoints} point(s)`);
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
  
  // Prompt Player
  let playerChoice = prompt("Enter rock, paper or scissors");
  // let pointMessage = (`You have ${playerPoints} point(s) and the computer has ${cpuPoints} point(s)`);
  
  // Determine point allocation
  if (selection === playerChoice){
    console.log("Tie");
    console.log(`You have ${playerPoints} point(s) and the computer has ${cpuPoints} point(s)`);
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
    console.log("You lose");
    cpuPoints++;
    console.log(`You have ${playerPoints} point(s) and the computer has ${cpuPoints} point(s)`);
  }
  
}

playGame();
playGame();
playGame();
playGame();
playGame();