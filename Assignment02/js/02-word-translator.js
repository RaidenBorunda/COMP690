let userLanguagePrompt = prompt('Please enter one of the following: es, de, en, or fr')
switch (userLanguagePrompt) {
    case 'es':
        console.log('Hello World in Spanish is: Hola Mundo!')
        break
    case 'de':
        console.log('Hello World in German is: Hallo Welt!')
        break
    case 'fr':
        console.log('Hello World in French is: Bonjour le monde!')
        break
    default:
        console.log('Hello World in English is: Hello World!')
}