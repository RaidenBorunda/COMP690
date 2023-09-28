let randomNum = Math.round(Math.random())
let coinFlip = randomNum
if (coinFlip == 0){
    coinFlip = 'Heads'
} else {coinFlip = 'Tails'}

let playerChoice = prompt('Heads or Tails?')
if (playerChoice == coinFlip) {
    alert(`The flip was ${coinFlip} and you chose ${playerChoice}... you win!`)
} else {alert(`The flip was ${coinFlip} and you chose ${playerChoice}... you lose!`)}