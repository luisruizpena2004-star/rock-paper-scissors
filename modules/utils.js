export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getChoiceFromInt(val) {
    switch (val) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}
