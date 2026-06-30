function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

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

console.log(getHumanChoice());
