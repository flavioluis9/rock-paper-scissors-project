// Get computer choice function

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