const restart = document.querySelector(".restart-btn");
const gameBtns = document.querySelectorAll(".choice-btn");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".modal-content");
const modal = document.querySelector(".modal");
const score = {
    playerScore: 0,
    computerScore: 0,
};

function game(e) {
    restart.style.display = "inline-block";
    const playerSelection = e.target.id.toUpperCase();
    const computerSelection = computerPlay().toUpperCase();
    const winner = playRound(playerSelection, computerSelection);
    finalWinner(winner, computerSelection);
}

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
        return "Player Win!";
    } else if (
        (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
        (computerSelection === "PAPER" && playerSelection === "ROCK") ||
        (computerSelection === "ROCK" && playerSelection === "SCISSORS")
    ) {
        return "Computer Win!";
    } else {
        return "Please enter valid input.";
    }
}

function finalWinner(winner, computerSelection) {
    if (winner === "Computer Win!") {
        score.computerScore++;
        result.innerHTML = `     
     <h1 class="text-win"> Computer Win</h1>
     <img src="./images/${computerSelection.toLowerCase()}.svg" id= ${computerSelection} />
            <p>Computer Chose <strong>${computerSelection}</p>`;
    } else if (winner === "Player Win!") {
        score.playerScore++;
        result.innerHTML = `     
     <h1 class="text-win"> Player Win</h1>
     <img src="./images/${computerSelection.toLowerCase()}.svg" id= ${computerSelection} />
     <p>Computer Chose <strong>${computerSelection}</strong></p>`;
    } else {
        result.innerHTML = `     
     <h1 class="text-win"> Draw!</h1>
     <img src="./images/${computerSelection.toLowerCase()}.svg" id= ${computerSelection} />
     <p>Computer Chose <strong>${computerSelection}</strong></p>`;
    }
    scoreBoard.innerHTML = `
    <p>Player Score: ${score.playerScore}</p>
    <p>Computer Score: ${score.computerScore}</p>
  `;
    modal.style.display = "block";
}

function restartGame() {
    (score.computerScore = 0), (score.playerScore = 0);
    scoreBoard.innerHTML = `
    <p>Player Score: 0</p>
    <p>Computer Score: 0</p>
  `;
}

function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

gameBtns.forEach((choice) => choice.addEventListener("click", game));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);