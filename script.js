import { getRandomInt, getChoiceFromInt } from "./modules/utils.js";

let humanScore = 0;
let computerScore = 0;

playGame();

function getComputerChoice() {
    let randomNumber = getRandomInt(3) + 1;
    return randomNumber;
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors? ").trim().toLowerCase();
    // Returning the value as a number allow us to use a simple formula to get the winner
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
        humanScore++;
        console.log(
            `You win the round! ${getChoiceFromInt(humanChoice)} beats ${getChoiceFromInt(computerChoice)}`,
        );
        return "human";
    } else {
        computerScore++;
        console.log(
            `You lose the round! ${getChoiceFromInt(computerChoice)} beats ${getChoiceFromInt(humanChoice)}`,
        );
        return "computer";
    }
}

function playGame() {
    let humanChoice;
    let computerChoice;
    for (let i = 1; i <= 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    displayGameResult();
}

function displayGameResult() {
    if (humanScore === computerScore) {
        console.log(`Draw!`);
    } else if (humanScore > computerScore) {
        console.log(`You Win!`);
    } else {
        console.log(`You Lose!`);
    }
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}
