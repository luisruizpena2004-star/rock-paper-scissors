playGame();

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
  return winner;
}

function playGame() {
  let roundWinner;
  let humanScore = 0;
  let computerScore = 0;
  let humanSelection;
  let computerSelection;
  for (let i = 1; i <= 5; i++) {
    console.log(`ROUND ${i}`);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    roundWinner = playRound(humanSelection, computerSelection);
    if (roundWinner === "Human") {
      humanScore++;
      console.log(`You win! ${humanSelection} beats ${computerSelection}`);
    } else if (roundWinner === "Computer") {
      computerScore++;
      console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
    } else {
      console.log(`Draw! Both chose ${humanSelection}`);
    }
  }
  console.log("RESULTS");
  if (humanScore === computerScore) {
    console.log("Draw!");
  } else if (humanScore > computerScore) {
    console.log("You Win!");
  } else {
    console.log("You Lose!");
  }
  console.log(`Player Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
}

// Utils
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
