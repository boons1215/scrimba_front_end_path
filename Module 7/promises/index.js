// document.getElementById("button").addEventListener("click", () =>
//     console.log("asd"))

//
// const voters = [
//     {name: "Joe", email: "joe@joe.com", voted: true},
//     {name: "Jane", email: "jane@jane.com", voted: true},
//     {name: "Bo", email: "bo@bo.com", voted: false},
//     {name: "Bane", email: "bane@bane.com", voted: false}
// ]

// document.getElementById("button").addEventListener("click", (event) => {
//     event.preventDefault()
//     for (let voter of voters) {
//         voter.voted ? console.log(voter.email) : {}
//     }
// })

// const result = voters.filter(voter => voter.voted).map(voter => voter.email)
// console.log(result)

//
//
const promise = fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
const promise2 = promise.then(res => res.json())
console.log(promise2) // pending state 

promise2.then(data => console.log(data)) // fulfilled state

/* 
- Promises are in one of 3 states at any given time
    - Pending
    - Fulfilled
    - Rejected
*/

//long version
fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log(data)
    })

    
fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(function(res) {
        return 1
    })
    .then(function(data) {
        console.log(data)
    })
