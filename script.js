function getComuputerChoice() {
    let computerChoice;
    let randNum = Math.floor(Math.random() * 3);

    if (randNum === 0) {
        computerChoice = "rock";
    }else if (randNum === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice
}

function getHumanChoice() {
    console.log("Please select your move: rock, paper or scissors");
    const humanChoice = prompt("rock, paper or scissors?", "rock");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    console.log("*You chose: " + humanChoice + "*")
    console.log("*Computer chose: " +computerChoice + "*")

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        console.log("Player: " + humanScore + ", Computer: " + computerScore);
    }else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ){
        computerScore++;
        console.log(humanChoice + " loses to " + computerChoice + "!");
        console.log("Player: " + humanScore + ", Computer: " + computerScore);
    }else {
        humanScore++;
        console.log(humanChoice + " beats " + computerChoice + "!");
        console.log("Player: " + humanScore + ", Computer: " + computerScore);
    }
}

//init scores
let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComuputerChoice();

playRound(humanSelection, computerSelection)