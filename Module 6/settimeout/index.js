const question = "what is the capital of Peru?"
const answer = "Lima!"

console.log(question)

setTimeout(() => console.log(answer), 3000)

// setTimeout(function() {
//     console.log(answer)
// }, 3000)


console.log(`Once upon a time, a beautiful princess met a handsome prince.`)
setTimeout(() => 
    console.log(`In the end, they lived happily ever after.`), 4000
)
setTimeout(() => 
    console.log(`The princess's wicked stepmother put a curse on them before they could marry.`), 1000
)
setTimeout(() => 
    console.log(`They got married on a beautiful summer's day.`), 3000
)
setTimeout(() => 
    console.log(`The prince found a friendly wizard to lift the curse.`), 2000
)