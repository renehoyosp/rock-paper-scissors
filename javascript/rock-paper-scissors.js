function getComputerChoice() { 
    let number = Math.floor(Math.random() * 3);

    if (number == 0) {
        return "rock";
    } else if (number == 1) {
        return "scissor";
    } else {
        return "paper";
    }
}


 
function getHumanChoice() {
    let choice = prompt("Pls choose: rock, paper or scissors").toLowerCase();

    if (choice == "rock") {
        return "rock";
    } else if (choice == "scissor") {
        return "scissor";
    } else if (choice == "paper") {
        return "paper";
    } else {
        return "wrong input";
    }

    
}


function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        return "it's a tie";
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        humanScore++;
        return "You win! Rock fucks Scissor";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        return "You lose! Paper beats rock";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return "You win! Paper beats rock";
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        computerScore ++;
        return "You lose! Scissor beats paper";
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        humanScore++;
        return "You win! Scissor beats paper";
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        computerScore++;
        return "You lose! Rock beats scissor";
    }
}

let humanScore = 0;
let computerScore = 0;

function gameResult(humanScore, computerScore) {

    if (humanScore == computerScore) {
        return "It's a tie, no winners";
    } else if (humanScore > computerScore) {
        return "HUMAN WINS!";
    } else {
        return "COMPUTER WINS!";
    }
}

function playGame() {

    for (roundNumber = 1; roundNumber < 6; roundNumber++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        console.log("Round ", roundNumber);
        console.log(playRound(humanSelection, computerSelection));
        console.log("Human score", humanScore);
        console.log("PC Score", computerScore);
    }

    console.log("----GAME WINNER----");
    console.log(gameResult(humanScore, computerScore));     

    return;
}


console.log(playGame());





