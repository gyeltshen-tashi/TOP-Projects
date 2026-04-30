// Write the possible/available choices
const choices = ['rock', 'paper', 'scissors'];

// Write a function to get computers choice 
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];
}

// Write a function to get the humans choice 
function getHumanChoice() {
    const humanChoice = prompt("choose: ", );
    return humanChoice.toLowerCase();
}

// Create two variables to keep track of scores for human and the computer
let humanScore = 0;
let computerScore = 0;

// Write a function to declare the winner and looser of each round and update the score 
function playRound(computerSelection, humanSelection) {
    if (computerSelection===humanSelection){
        console.log(`You played ${humanSelection} | Computer played ${computerSelection}`);
        console.log("You drew this time");
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
    }
    else if (computerSelection==='rock' && humanSelection==='paper') {
        console.log(`You played ${humanSelection} | Computer played ${computerSelection}`);
        console.log("You won! paper beats rock");
        console.log(`Your Score: ${humanScore += 1} | Computer Score: ${computerScore}`);
    }
    else if (computerSelection==='rock' && humanSelection==='scissors') {
        console.log(`You played ${humanSelection} | Computer played ${computerSelection}`);
        console.log("You lost! rock beats scissors");
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore += 1}`);
    }
    else if (computerSelection==='paper' && humanSelection==='scissors') {
        console.log(`You played ${humanSelection} | Computer played ${computerSelection}`);
        console.log("You won! scissors beats paper");
        console.log(`Your Score: ${humanScore += 1} | Computer Score: ${computerScore}`);
    }
    else if (computerSelection==='paper' && humanSelection==='rock') {
        console.log(`You played ${humanSelection} | Computer played ${computerSelection}`);
        console.log("You lost! paper beats rock");
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore += 1}`);
    }
    else if (computerSelection==='scissors' && humanSelection==='rock') {
        console.log(`You played ${humanSelection} | Computer played ${computerSelection}`);
        console.log("You won! rock beats scissors");
        console.log(`Your Score: ${humanScore += 1} | Computer Score: ${computerScore}`);
    }
    else if (computerSelection==='scissors' && humanSelection==='paper') {
        console.log(`You played ${humanSelection} | Computer played ${computerSelection}`);
        console.log("You lost! scissors beats paper");
        console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore += 1}`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }
    if (humanScore > computerScore) {
        console.log("Whoray! You win!");
    } 
    else if (computerScore > humanScore) {
        console.log("You lost! Better luck next time");                                         
  } else {
        console.log("It's a tie!");
    }
}

playGame();