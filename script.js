import { getRandomInt, getChoiceFromInt } from "./modules/utils.js";

playGame();

function getComputerChoice() {
  let randomNumber = getRandomInt(3) + 1;
  return randomNumber;
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissors? ").trim().toLowerCase();
  switch (choice) {
    case "rock":
      return 1;
    case "paper":
      return 2;
    case "scissors":
      return 3;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`You draw! both chose ${getChoiceFromInt(humanChoice)}`);
    return "draw";
  } else if (
    humanChoice - computerChoice === 1 ||
    humanChoice - computerChoice === -2
  ) {
    return "human";
  } else {
    return "computer";
  }
}

function playGame() {
  let winner;
  let humanChoice;
  let computerChoice;

  let humanScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    winner = playRound(humanChoice, computerChoice);
    if (winner === "human") {
      humanScore++;
      console.log(
        `You win the round! ${getChoiceFromInt(humanChoice)} beats ${getChoiceFromInt(computerChoice)}`,
      );
    } else if (winner === "computer") {
      computerScore++;
      console.log(
        `You lose the round! ${getChoiceFromInt(computerChoice)} beats ${getChoiceFromInt(humanChoice)}`,
      );
    } else {
      console.log(`Draw! Both chose ${getChoiceFromInt(computerChoice)}`);
    }
  }

  if (humanScore === computerScore) {
    console.log(`Draw!`);
  } else if (humanScore > computerScore) {
    console.log(`You Win!`);
  } else {
    console.log(`You Lose!`);
  }
  console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}
