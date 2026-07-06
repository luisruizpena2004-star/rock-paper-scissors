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
});

function getComputerChoice() {
    let randomNumber = getRandomInt(3) + 1;
    return randomNumber;
}

function playRound(humanChoice, computerChoice) {
    let labelHumanChoice = getChoiceFromInt(humanChoice);
    let labelComputerChoice = getChoiceFromInt(computerChoice);

    if (humanChoice === computerChoice) {
        createResultPara(`You draw! both chose ${labelHumanChoice}`, "gold");
    } else if (
        humanChoice - computerChoice === 1 ||
        humanChoice - computerChoice === -2
    ) {
        humanScore++;
        createResultPara(
            `You win the round! ${labelHumanChoice} beats ${labelComputerChoice}`,
            "green",
        );
    } else {
        computerScore++;
        createResultPara(
            `You lose the round! ${labelComputerChoice} beats ${labelHumanChoice}`,
            "red",
        );
    }
    humanScoreLabel.textContent = humanScore;
    computerScoreLabel.textContent = computerScore;
}

function createResultPara(text, color) {
    const para = document.createElement("p");
    para.textContent = text;
    para.style.color = color;
    resultDiv.appendChild(para);
}
