// MATH 0-2 FUNCTION
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
// USER CHOICE
let userChoice = prompt('Please enter Rock, Paper or Scissors.')
userChoice = userChoice.toUpperCase()
let validChoice = false

while (validChoice == false) {
    if (userChoice == 'ROCK' || userChoice == 'PAPER' ||userChoice == 'SCISSORS'){
        validChoice = true
        console.log(userChoice)
    } else {
        userChoice = prompt('Invalid entry. Please enter Rock, Paper, or Scissors.')
        userChoice = userChoice.toUpperCase()
    }
}
// COMPUTER CHOICE
let compChoice = getRandomInt(3)
if (compChoice == 0){
    compChoice = 'ROCK'
} else if (compChoice == 1) {
    compChoice = 'PAPER'
} else {compChoice = 'SCISSORS'
console.log(compChoice)  
}
// DECIDER
if(compChoice === userChoice){
    alert(`It's a tie! You and the computer both picked ${userChoice}`)
} else if(compChoice == 'ROCK' && userChoice == 'PAPER'){
    alert(`You win! The Computer picked ${compChoice} and you picked ${userChoice}`)
} else if(compChoice == 'PAPER' && userChoice == 'SCISSORS'){
    alert(`You win! The Computer picked ${compChoice} and you picked ${userChoice}`)
} else if(compChoice == 'SCISSORS' && userChoice == 'ROCK'){
    alert(`You win! The Computer picked ${compChoice} and you picked ${userChoice}`)
} else if(compChoice == 'ROCK' && userChoice == 'SCISSORS'){
    alert(`You lose! The Computer picked ${compChoice} and you picked ${userChoice}`)
} else if(compChoice == 'PAPER' && userChoice == 'ROCK'){
    alert(`You lose! The Computer picked ${compChoice} and you picked ${userChoice}`)
} else if(compChoice == 'SCISSORS' && userChoice == 'PAPER'){
    alert(`You lose! The Computer picked ${compChoice} and you picked ${userChoice}`)
}
