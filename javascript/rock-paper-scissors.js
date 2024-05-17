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
    let choice = prompt("Pls elije si piedra, papel o tijera");

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

// recoger la decisión del humano y guardarla
// recoger la decisión de la máquina y guardarla
// evaluar condiciones
// si el humano y la maquina elijen la misma vaina
// entonces es empate

// necesito que me muestre cuando gano y pierdo
// si cojo piedra y la maquina tijera 
// la parto e incremento mi score en 1
// pero si la maquina coje papel
// me parte y el pc aumenta su score en 1



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice == computerChoice) {
        return "It's a thai";
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        return "You win! Rock fucks Scissor";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        return "You lose! Paper beats rock";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        return "You win! Paper beats rock";
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        return "You lose! Scissor beats paper";
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        return "You win! Scissor beats paper";
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        return "You lose! Rock beats scissor";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

console.log(humanScore);  





