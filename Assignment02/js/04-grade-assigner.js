let numPrompt = parseInt(prompt('Please enter a number between 1 and 100:'))
if (numPrompt < 1 || numPrompt > 100) {
    alert('Only numbers between 1 and 100 are accepted.')
}
switch (true) {
    case numPrompt >= 90 && numPrompt <= 100 :
        console.log('You received a A')
        break 
    case numPrompt >= 80 && numPrompt <= 89 :
        console.log('You received a B')
        break
    case numPrompt >= 70 && numPrompt <= 79 :
        console.log('You received a C')
        break    
    case numPrompt >= 60 && numPrompt <= 69 :
        console.log('You received a D')
        break    
    default :
        console.log('You received an F')
        break
    }