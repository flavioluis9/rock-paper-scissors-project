// Computer Choice Function

function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice = "";

    if (randomNumber < (1/3)) {
        computerChoice = "Rock";
    } else if (randomNumber > (2/3)) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

console.log(getComputerChoice());


// Human Choice Function

function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper or Scissors: ");
    return humanChoice;
}

console.log(getHumanChoice());


// Scores

let computerScore = 0;
let humanScore = 0;


// Single Round function

