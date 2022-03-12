let cards = []
let hasBlackJack = false
let isAlive = false
let sum = 0
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: window.prompt("Enter your name: "),
    playerChips: window.prompt("Enter your chips: ")
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.playerChips

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard

    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        message = "Do you want to draw a new card?" 
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}    

function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1
    if (random === 1) {
        return 11
    } else if (random > 10) {
        return 10
    } else {
        return random
    }
}

function newCard() {
    if (isAlive && hasBlackJack == false && cards.length != 5) {
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}