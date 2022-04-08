const getCardsBtn = document.getElementById("get-cards")

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(resp => resp.json())
        .then(data => console.log(data))
}

getCardsBtn.addEventListener("click", () => handleClick())

// setTimeout(function() {
//     console.log("I finally ran")
// }, 2000)


// function callback() {
//     console.log("test")
// }

// setTimeout(callback, 2000)

//

const people = [
    { name: "Jack", hasPet: true, age: 12 },
    { name: "Jill", hasPet: false, age: 18 },
    { name: "Alice", hasPet: true, age: 22 },
    { name: "Bob", hasPet: false, age: 32 },
]

// const newPeople = people.filter(hasPet)

// function hasPet(p) {
//     return p.hasPet === true
// }

// const peopleWithPets = people.filter(p => p.hasPet === true)
// console.log(peopleWithPets)

// const olderPeople = people.filter(p => p.age >= 18)
// console.log(olderPeople)

function filterArray(array, callback) {
    const resultingArray = []

    for (let a of array) {
        const result = callback(a.hasPet)

        if (result) {
            resultingArray.push(a)
        }
    }
    return resultingArray
}

function hasPet(value) {
    return (value) ? true : false
}

const peopleWPets = filterArray(people, hasPet)

console.log(peopleWPets)