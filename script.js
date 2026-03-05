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
console.log(`Score ==> You: ${humanScore} | Computer: ${computerScore}`);



// Round Number
let roundNumber = 1;

// Play Game function
function playGame() {
    for (let i = 1; i < 5; i++) {
        playRound();
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice().toLowerCase();
        console.log(playRound(computerSelection, humanSelection));
        console.log(`Score ==> You: ${humanScore} | Computer: ${computerScore}`);
        roundNumber++;
    }
}
playGame();