//STEP 1
function nameLength(){
    let userName = prompt("Please enter your name.");
    let strLength = userName.length;
    alert(strLength);
}
nameLength();
//STEP 2
function nameIndex(){
    let userName = prompt("Please enter your name.");
    let numValue = prompt("Please enter a number");
    let numIndex =  userName.charAt(numValue);
    alert(numIndex);
}
nameIndex();
//STEP 3
function fullName(){
    let firstName = prompt("Please enter your first name.");
    let lastName = prompt("Please enter your last name.")
    alert("Your name is: " + firstName + " " + lastName);
}
fullName();
//STEP 4
function strSearch(){
    let phrase = "The quick brown fox jumps over the lazy dog"
    alert(phrase.search("fox"))
}
strSearch();
//STEP 5
function strIndex(){
    let phrase = "The quick brown fox jumps over the lazy fox"
    alert(phrase.lastIndexOf("fox"))
}
strIndex();
//STEP 6
function strReplace(){
    let phrase = "The quick brown fox jumped over the lazy dog"
    let firstName = prompt("Please enter your first name.");
    let newPhrase = phrase.replace("the lazy dog", firstName);
    alert(newPhrase)
}
strReplace();
//STEP 7
function wordFinder(){
    let phrase = "The quick brown fox jumped over the lazy dog"
    let wordPrompt = prompt("Please enter a word.")
    let indexPrompt = phrase.search(wordPrompt)
    if (indexPrompt > -1) {
        alert("Congrats! The word " + wordPrompt + " was found.")
    } else (alert("That word was not found."))
}
wordFinder();
//STEP 8
function strSlicer(){
    let old_string = "The quick brown fox jumped over the lazy dog"
    let new_string = old_string.slice(32, 44)
    alert(new_string.toUpperCase())
}
strSlicer();
//STEP 9
function strTrimmer(){
    let phrase = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "
    alert(phrase.trim());
}
strTrimmer();
//STEP 10
function strCapital(){
    let phrase = "the quick brown fox jumps over the lazy dog"
    alert(phrase.charAt(0).toUpperCase() + phrase.slice(1))
}
strCapital();