function getComputerChoice() { 
    let number = Math.floor(Math.random() * 3);

    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "scissor";
    } else {
        return "paper";
    }
}

function getHumanChoice() {
    let choice = prompt("Pls elije si piedra, papel o tijera");

    if (choice = "rock") {
        return "rock";
    } else if (choice = "scissor") {
        return "scissor";
    } else if (choice = "paper") {
        return "paper";
    } else {
        return "wrong input";
    }
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {


}

const humanScore = 0;
const computerScore = 0;







