let humanScore = 0,
  computerScore = 0;

function getComputerChoice() {
  const gameLogic = ["rock", "paper", "scissor"];
  return gameLogic[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  const userInput = prompt("Enter your Decision");
  return userInput.toLowerCase();
}

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    console.log("Same");
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
  }
}
