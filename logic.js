let gameLogic = ["rock", "paper", "scissor"];
let humanScore = 0,
  computerScore = 0;

function getComputerChoice() {
  return gameLogic[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  const userInput = prompt("Enter your Decision");
  return userInput.toLowerCase();
}

function randomlyShiftElements(inputList) {
    // Step 1: Determine the length of the list
    const n = inputList.length;
  
    // Step 2: Generate a random number of positions to shift
    const shift = Math.floor(Math.random() * n) + 1;
  
    // Step 3: Perform the shift using array slicing
    gameLogic = inputList.slice(shift).concat(inputList.slice(0, shift));
    return;
  }


function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    randomlyShiftElements(gameLogic);
  } else if (humanChoice === "rock" && computerChoice === "scissor") {
    humanScore += 1;
    console.log("Human Wins");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    console.log("Computer Wins");
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    computerScore += 1;
    console.log("Computer Wins");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    console.log("Human Wins");
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    computerScore += 1;
    console.log("Computer Wins");
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    humanScore += 1;
    console.log("Human Wins");
  } else {
    console.log('Please Select Only ["rock", "paper", "scissor"]');
    randomlyShiftElements(gameLogic);
  }
}
function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    console.log(`Human Score = ${humanScore}\nComputer Score = ${computerScore}`);
    winner(humanScore, computerScore);
  }
  

function winner(human, computer) {
    if (human > computer) {
      console.log("You are Winner!!");
      return;
    } else if (computer > human) {
      console.log("You are Loser!!");
      return;
    } else {
      console.log("Match is Draw!!");
      return;
    }
  }

playGame();