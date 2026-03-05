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


// Human Choice Function

function getHumanChoice() {
    let humanChoice = prompt("Choose Rock, Paper or Scissors: ");
    return humanChoice;
}


// Scores

let computerScore = 0;
let humanScore = 0;


// Winning tables

const beatsTable = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};


// Single Round function


function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        computerScore++;
        humanScore++;
        return "Tie! Both chose " + humanChoice;
    } else if (beatsTable[humanChoice] === computerChoice) {
        humanScore++;
        return "You win! Your choice, " + humanChoice + ", beats computer's choice, " + computerChoice + ".";
    } else {
        computerScore++;
        return "You lose. Computer's choice, " + computerChoice + ", beats your choice, " + humanChoice + ".";
    }
}

console.log(playRound(getComputerChoice().toLowerCase(), getHumanChoice().toLowerCase()));


//

