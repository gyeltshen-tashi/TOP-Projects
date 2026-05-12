const body = document.querySelector("body");
const score = document.createElement("h3");
const announceWinner = document.createElement("h1")

// Write the possible/available choices
const choices = ['rock', 'paper', 'scissors'];

// Write a function to get computers choice 
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

// Create two variables to keep track of scores for human and the computer
let humanScore = 0;
let computerScore = 0;

score.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`

// Write a function to declare the winner and looser of each round and update the score 
function playRound(computerSelection, humanSelection) {
    const div = document.createElement("div");
    const selection = document.createElement("h4");
    const result = document.createElement("h3");

    selection.textContent = `You played ${humanSelection} | Computer played ${computerSelection}`;

    if (computerSelection===humanSelection){
        result.textContent = "You drew this time!"; 
    }
    else if (computerSelection==='rock' && humanSelection==='paper' || computerSelection==='paper' && humanSelection==='scissors' || computerSelection==='scissors' && humanSelection==='rock') {
        result.textContent = `You won! ${humanSelection} beats ${computerSelection}`;
        humanScore += 1;
    }
    else {
        result.textContent = `You lost! ${computerSelection} beats ${humanSelection}`;
        computerScore += 1  
    }
    score.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`

    div.appendChild(selection);
    div.appendChild(result);  
    body.appendChild(div)

    if (humanScore === 5) {
        announceWinner.textContent = "Whoray! You won!";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
    else if (computerScore === 5) {
        announceWinner.textContent = "You lost! Better luck next time.";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";

const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper"

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors"

rockBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock")
})

paperBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper")
})

scissorsBtn.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissors")
})

body.appendChild(score)
body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorsBtn);
body.appendChild(announceWinner);