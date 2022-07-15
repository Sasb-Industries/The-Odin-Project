console.log("Hello, World!")

let computerChoices = ["Rock", "Paper", "Scissors"] //Create array of choices
let randomChoice = Math.floor(Math.random() * computerChoices.length)  //Select a random choice from the list

function computerPlay() {
    if (randomChoice === 0) {
        return "rock"
    } else if (randomChoice === 1) {
        return "paper"
    } else if (randomChoice === 2) {
        return "scissors"
    }
}

// let input = prompt("Choose rock, paper or scissors").toLowerCase()

let playerSelection = "scissors"
document.querySelector("#player").innerHTML = playerSelection.toString()
let computerSelection = computerPlay()
console.log(playerSelection, computerSelection)

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === "Rock" && computerSelection === "Paper") {
//         return "Lose"
//     } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
//         return "Win"
//     } else if (playerSelection === "Rock" && computerSelection === "Rock") {
//         return "Tie"
//     } else if (playerSelection === "Paper" && computerSelection === "Paper") {
//         return "Tie"
//     } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
//         return "Lose"
//     } else if (playerSelection === "Paper" && computerSelection === "Rock") {
//         return "Win"
//     } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
//         return "Tie"
//     } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
//         return "Win"
//     } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
//         return "Lose"
//     } else {return "IDK"}
// }

//This is a condnesed version
function playRound(playerSelection, computerSelection) {
    if ( (playerSelection == "rock" && computerSelection == "scissors") ||
         (playerSelection == "paper" && computerSelection == "rock") ||
         (playerSelection == "scissors" && computerSelection == "paper")) {
            return "You Win"
         } else if (playerSelection == computerSelection) {
            return "Tie"
         } else {return "Lose"}
}

console.log(playRound(playerSelection, computerSelection))
