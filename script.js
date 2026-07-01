let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// Game functions
function getComputerChoice() {
  let choice = "";
  let randomNumber = getRandomInt(3);
  switch (randomNumber) {
    case 0:
      choice = "Rock";
      break;
    case 1:
      choice = "Paper";
      break;
    case 2:
      choice = "Scissors";
      break;
  }
  return choice;
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissors? ").trim().toLowerCase();
  return capitalizeFirstLetter(choice);
}

function playRound(humanChoice, computerChoice) {
  let winner;
  //Draw
  if (humanChoice === computerChoice) {
    winner = null;
    //Human Win situations
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    winner = "Human";
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    winner = "Human";
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    winner = "Human";
    //Computer Win situations
  } else if (computerChoice === "Paper" && humanChoice === "Rock") {
    winner = "Computer";
  } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
    winner = "Computer";
  } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
    winner = "Computer";
  }
  console.log(`Player: ${humanChoice}`);
  console.log(`Computer: ${computerChoice}`);
  if (winner === "Human") {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else if (winner === "Computer") {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  } else {
    console.log(`Draw! Both chose ${humanChoice}`);
  }
  return;
}

// Utils
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
