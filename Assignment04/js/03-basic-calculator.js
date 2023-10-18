// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, oper){
    switch (true) {
        case oper == 'ADD' :
            result = x + y
            break 
        case oper == 'SUBTRACT' :
            result = x - y
            break
        case oper == 'MULTIPLY' :
            result = x * y
            break    
        case oper == 'DIVIDE' :
            result = x / y
            break
        }

}

let userChoice = true
do {
    // COLLECT FIRST NUMBER FROM USER
    x = parseInt(prompt('Please enter a number.'))
    // COLLECT SECOND NUMBER FROM USER
    y = parseInt(prompt('Please enter another number.'))
    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

    let oper = prompt('Would you like to add, subtract, multiply, or divide?')
    oper = oper.toUpperCase()
    let validChoice = false

    while (validChoice == false) {
        if (oper == 'ADD' || oper == 'SUBTRACT' || oper == 'MULTIPLY' || oper == 'DIVIDE' ){
            validChoice = true
        } else {
            oper = prompt('Invalid entry. Please enter add, subtract, multiply, or divide.')
            oper = oper.toUpperCase()
        }
    }
    // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    calculate(x,y,oper)
    alert(`The result is ${result}`)
    userChoice = prompt('Would you like to calculate again? y or n')
    if(userChoice == 'n'){
        alert('Thanks for calculating with me!')
        userChoice = false
    } else {userChoice = true}

} while (userChoice == true);
