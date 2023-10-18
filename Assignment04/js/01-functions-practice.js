//STEP 1
function halfNum(num) {
    let division = num / 2
    console.log(`Half of ${num} is ${division}`)
 } halfNum(parseInt(prompt('Please enter a number')))

//STEP 2
function squareNumber(num1){
    let sqrNum = num1 * num1
    console.log(`The result of squaring the number ${num1} is ${sqrNum}`)
} squareNumber(parseInt(prompt('Please enter a another number')))
//STEP 3
function percentOf(num2, num3){
    let percentNum = num2 / num3
    percentNum = percentNum * 100
    console.log(`${num2} is ${percentNum}% of ${num3}`)
} percentOf(parseInt(prompt('Please enter a number.')), parseInt(prompt('Please enter another number.')))
//STEP 4
function findModulus(num3, num4){
        let modulusNum = num4 % num3
        console.log(`${modulusNum} is the modulus of ${num3} and ${num4}`)
} findModulus(parseInt(prompt('Please enter a number.')), parseInt(prompt('Please enter another number.')))
