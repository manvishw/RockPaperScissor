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
