function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);
    return options[random];
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player**: ${playerSelection}`);
    console.log(`Computer**: ${computerSelection}`);
    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (
        (computerSelection === "ROCK" && playerSelection === "PAPER") ||
        (computerSelection === "PAPER" && playerSelection === "SCISSORS") ||
        (computerSelection === "SCISSORS" && playerSelection === "ROCK")
    ) {
        return "Player Wins!";
    } else if (
        (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
        (computerSelection === "PAPER" && playerSelection === "ROCK") ||
        (computerSelection === "ROCK" && playerSelection === "SCISSORS")
    ) {
        return "Computer Wins!";
    } else {
        return "Please enter valid input.";
    }
}

function game() {
    let computerScore = 0,
        playerScore = 0;

    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay().toUpperCase();
        const playerSelection = prompt().toUpperCase();
        let gameRound = playRound(playerSelection, computerSelection);
        console.log(gameRound);
        let winner = "computer wins!";
        if (gameRound === winner) {
            computerScore++;
        } else {
            playerScore++;
        }
    }
    if (computerScore === playerScore) {
        return "Draw!";
    } else if (computerScore > playerScore) {
        return "Computer Wins!";
    } else {
        return "Player Wins!";
    }
}

console.log(game());