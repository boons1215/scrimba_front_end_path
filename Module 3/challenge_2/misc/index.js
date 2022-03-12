// let person = {
//     name: "Boon",
//     age: 38,
//     country: "Malaysia"
// }

// let personEl = document.getElementById("person-el")

// function logData() {
//     personEl.textContent = person.name + " is " + person.age + " years old and lives in " + person.country
// }

// logData()

// //

// let hands = ["rocks", "paper", "scissor"]

// function getHand() {
//     let randomIndex = Math.floor(Math.random() * 3)
//     return hands[randomIndex]
// }

// console.log(getHand())

//

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function arrangeFruits() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else {
            orangeShelf.textContent += "🍊"
        }
    }
}

arrangeFruits()