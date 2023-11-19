// STEP 1
let movies = ['Inception', 'Lord of The Rings', 'Harry Potter', 'Tenet', 'Coco']
console.log(movies)

// STEP 2
let movies = new Array(5)
movies[0] = 'Inception'
movies[1] = 'Lord of The Rings'
movies[2] = 'Harry Potter'
movies[3] = 'Tenet'
movies[4] = 'Coco'
console.log(movies) 

// STEP 3
let movies = new Array(5)
movies[0] = 'Inception'
movies[1] = 'Lord of The Rings'
movies[2] = 'Harry Potter'
movies[3] = 'Tenet'
movies[4] = 'Coco'
movies.splice(2, 0, 'Friday')
console.log(movies) 

// STEP 4
let movies = [
    'Inception',
    'Lord of The Rings',
    'Harry Potter',
    'Tenet',
    'Coco'
]
movies.shift()
console.log(movies)

// STEP 5
let movies = [
    'Inception',
    'Lord of The Rings',
    'Harry Potter',
    'Tenet',
    'Casino Royale',
    'Forgetting Sarah Marshall',
    'Toy Story'
]
for (const movie in movies) {
    console.log(movies[movie])
        
   }

// STEP 6
let movies = [
    'Inception',
    'Lord of The Rings',
    'Harry Potter',
    'Tenet',
    'Casino Royale',
    'Forgetting Sarah Marshall',
    'Toy Story'
]
for (const movie of movies) {
    console.log(movie)
        
    }

// STEP 7
let movies = [
    'Inception',
    'Lord of The Rings',
    'Harry Potter',
    'Tenet',
    'Casino Royale',
    'Forgetting Sarah Marshall',
    'Toy Story'
]
movies.sort()
for (const movie of movies) {
    console.log(movie)
    }

// STEP 8
let movies = [
    'Inception',
    'Lord of The Rings',
    'Harry Potter',
    'Tenet',
    'Casino Royale',
    'Forgetting Sarah Marshall',
    'Toy Story'
]
leastFavMovies = [
    'Jupiter Ascending',
    'Sherlock Holmes',
    'The Last Airbender'
]
movies.sort()
console.log('Movies I like: \n \n')
for (const movie of movies) {
    console.log(movie)
    }
console.log('\n \n Movies I regret watching: \n \n')
for (const lMovie of leastFavMovies) {
    console.log(lMovie)
    }

// STEP 9
let movies = [
    'Inception',
    'Lord of The Rings',
    'Harry Potter',
    'Tenet',
    'Casino Royale',
    'Forgetting Sarah Marshall',
    'Toy Story'
]
leastFavMovies = [
    'Jupiter Ascending',
    'Sherlock Holmes',
    'The Last Airbender'
]
let allMovies = movies.concat('Jupiter Ascending', 'Sherlock Holmes', 'The Last Airbender')
console.log(allMovies.sort().reverse())

// STEP 10
let movies = [
    'Inception',
    'Lord of The Rings',
    'Harry Potter',
    'Tenet',
    'Casino Royale',
    'Forgetting Sarah Marshall',
    'Toy Story'
]
leastFavMovies = [
    'Jupiter Ascending',
    'Sherlock Holmes',
    'The Last Airbender'
]
let allMovies = movies.concat('Jupiter Ascending', 'Sherlock Holmes', 'The Last Airbender')
allMovies.sort().reverse()
console.log(allMovies.pop())

// STEP 11
let movies = [
    'Inception',
    'Lord of The Rings',
    'Harry Potter',
    'Tenet',
    'Casino Royale',
    'Forgetting Sarah Marshall',
    'Toy Story'
]
leastFavMovies = [
    'Jupiter Ascending',
    'Sherlock Holmes',
    'The Last Airbender'
]
let allMovies = movies.concat('Jupiter Ascending', 'Sherlock Holmes', 'The Last Airbender')
allMovies.sort().reverse()
console.log(allMovies.shift())

// STEP 12
let movies = [
    'Inception',
    'Lord of The Rings',
    'Harry Potter',
    'Tenet',
    'Casino Royale',
    'Forgetting Sarah Marshall',
    'Toy Story'
]
leastFavMovies = [
    'Jupiter Ascending',
    'Sherlock Holmes',
    'The Last Airbender'
]
let allMovies = movies.concat('Jupiter Ascending', 'Sherlock Holmes', 'The Last Airbender')
allMovies.sort().reverse()
console.log(allMovies)
movie1 = allMovies.indexOf('Jupiter Ascending')
movie2 = allMovies.indexOf('Sherlock Holmes')
movie3 = allMovies.indexOf('The Last Airbender')
console.log(` ${movie1} \n ${movie2} \n ${movie3}`)
allMovies[movie1] = 'Forest Gump'
allMovies[movie2] = 'The Force Awakens'
allMovies[movie3] = '2 Fast 2 Furious'
console.log(allMovies.sort())

// STEP 13
let movies = [
    ['Toy Story', 1],
    ['Lord of The Rings', 2],
    ['Inception', 3],
    ['Harry Potter', 4],
    ['Casino Royale', 5]
]

let rankedMovies = movies.filter((movie) => {
    return typeof movie[0] === 'string'
}).map(function (movie) {
    return movie[0]
})
console.log(rankedMovies)

// STEP 14
employees = [
    'ZAK',
    'JESSICA',
    'MARK',
    'FRED',
    'SALLY'
]

let showEmployees = function (x) {
    for (const i of x) {
        console.log(i)
    }
}
showEmployees(employees)

// STEP 15
let filterValues = function (x) {
    return x.filter(Boolean)

}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

// STEP 16
function randomNumber(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(randomNumber([0,1,2,3,4,5,6,7,8,9,10]))

// STEP 17
function largestNumber(arr) {
    return Math.max.apply(null, arr);
}
console.log(largestNumber([0,1,2,3,4,5,6,7,8,9,10]))