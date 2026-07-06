import { getRandomInt, getChoiceFromInt } from "./modules/utils.js";

const choiceBtns = document.querySelector("#choiceBtns");
const resultDiv = document.querySelector("#result");
const humanScoreLabel = document.querySelector("#humanScore");
const computerScoreLabel = document.querySelector("#computerScore");

let humanScore = 0;
let computerScore = 0;

choiceBtns.addEventListener("click", (e) => {
    // Getting the choices as an int(1,2 or 3) makes the result calculation easier
    let humanChoice = Number(e.target.dataset.value);
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    handleWinningScore(5);
});

function getComputerChoice() {
    let randomNumber = getRandomInt(3) + 1;
    return randomNumber;
}

function playRound(humanChoice, computerChoice) {
    const labelHumanChoice = getChoiceFromInt(humanChoice);
    const labelComputerChoice = getChoiceFromInt(computerChoice);

    if (humanChoice === computerChoice) {
        createResultElement(
            "p",
            `You draw! both chose ${labelHumanChoice}`,
            "gold",
        );
    } else if (
        humanChoice - computerChoice === 1 ||
        humanChoice - computerChoice === -2
    ) {
        humanScore++;
        createResultElement(
            "p",
            `You win the round! ${labelHumanChoice} beats ${labelComputerChoice}`,
            "green",
        );
    } else {
        computerScore++;
        createResultElement(
            "p",
            `You lose the round! ${labelComputerChoice} beats ${labelHumanChoice}`,
            "red",
        );
    }

    humanScoreLabel.textContent = humanScore;
    computerScoreLabel.textContent = computerScore;
}

function handleWinningScore(maxScore) {
    if (!(humanScore === maxScore || computerScore === maxScore)) return;

    const btns = document.querySelectorAll("button");
    btns.forEach((e) => e.setAttribute("disabled", "true"));
    if (humanScore > computerScore) {
        createResultElement("h2", "YOU WIN!", "green");
    } else {
        createResultElement("h2", "YOU LOSE!", "red");
    }
}

function createResultElement(type, text, color) {
    const element = document.createElement(type);
    element.textContent = text;
    element.style.color = color;
    resultDiv.appendChild(element);
}
