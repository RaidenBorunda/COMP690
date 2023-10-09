// VARIABLES
let futureValue
let investment
let rate
let years
let i

// COLLECT VALUES FROM USER
while(isNaN(investment)){
    investment = parseFloat(prompt('How much do you want to invest? (xxxx.xx)'))
}
while(isNaN(rate) || rate < 0 || rate > 6){
    rate = parseFloat(prompt('Enter interest rate as xx.x'))
}
while(isNaN(years) || years < 1 || years > 30){
    years = parseInt(prompt('Enter the number of years you want to invest for'))
}
// CALCULATE FUTURE VALUE
futureValue = investment
for (i = 0; i < years; i++ ){
    futureValue = futureValue + (futureValue * rate / 100)
} 

// DISPLAY THE RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`)
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`)
document.write(`Years: ${years}<br>`)
document.write(`Future Value: $${futureValue.toFixed(2)}`)