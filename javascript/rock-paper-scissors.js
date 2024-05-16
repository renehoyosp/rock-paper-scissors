// create getComputerChoice function
// request a random number return
// make the random return between 0 and 2
// si el numero es 0, dame piedra
// si el numero es 1, dame tijera
// si el numero es 2, dame papel

function getComputerChoice(choice) { 
    return Math.floor(Math.random() * 3);
}

console.log (getComputerChoice());


