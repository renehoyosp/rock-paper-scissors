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


let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice == computerChoice) {
        return "It's a thai";
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

//un juego de 5 rondas donde el que tenga el puntaje mas alto gana
//los jugadores deben jugar 5 rondas
//almacenar conteo de scores    
//una vez se acaben las 5 rondas
//evaluar los puntos
//si el humano tuvo mas puntos, gana el matcb
//si la computadora tuvo mas, gana 
///si ambos tuvieron el mismo puntaje, empate







