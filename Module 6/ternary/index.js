// condition ? expression : expression
// true or false ? check if true: check if false

const exerciseTimeMins = 60
let message = ''

if (exerciseTimeMins < 30) {
    message = "try harder"
} else {
    message = "doing good"
}

console.log(message)

//

console.log(exerciseTimeMins < 30 ? "try harder" : "doing good")

console.log(exerciseTimeMins < 30 ? "try harder" : exerciseTimeMins < 60 ? "doing good" : "excellent")

//

const playerGuess = 6
const correctAnswer = 6

console.log((playerGuess === correctAnswer) ? "Correct" : "Wrong!")

const a = playerGuess > correctAnswer ? "Too high" 
    : playerGuess < correctAnswer ? "Too low" 
    : "exactly right"

console.log(a)