//STEP 1
function daysInMonth(month, year){
    return new Date (year, month, 0).getDate();
}
let month = prompt("Please enter a month in numeric value. For example, October is 10.")
console.log(daysInMonth(month, 2023));
//STEP 2
function monthName(year, month, day){
    let date = new Date(year, month, day);
    let monthy = date.toLocaleString('default', { month: 'long'} );
    console.log(monthy)
}
let year = prompt("Please enter a year.");
let month = prompt("Please enter a month in numeric value. For example, March is 03.");
let day = prompt("Please enter a day in numeric value.");
month = month - 1 
monthName(year, month, day)
//STEP 3
let datePrompt = new Date(prompt('Please enter a date like 2023-01-15'));
let currentDay = datePrompt.getDay();
function weekendChecker(){
    let dateIsWeekend = (currentDay === 6) || (currentDay === 0);
    if(dateIsWeekend == true) {
        console.log("The given date " + datePrompt + " is a weekend.")
    } else {
        console.log("The given date " + datePrompt + " is not a weekend.")
    }
}
weekendChecker()
//STEP 4
function yesterdayCheck(){
    let d = new Date()
    d.setDate(d.getDate() - 1)
    console.log(d.toLocaleString('default', { weekday: 'long'}))
}
yesterdayCheck()
//STEP 5
function dateFirstLetter(){
    let d = new Date()
    d = d.toLocaleString('default', { weekday: 'long'})
    console.log(d.charAt(0))
}
dateFirstLetter()