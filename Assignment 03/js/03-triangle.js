// Create an empty string that adds a hashtag after each iteration of the for loop
let hashtag = "#"
let emptyString = ""
for (let i = 1; i <= 7; i++) {
    console.log(emptyString += hashtag)
}