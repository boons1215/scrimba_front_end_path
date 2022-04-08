let deckId
let computerScore = 0
let myScore = 0
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const header = document.getElementById("header")
const remainingCards = document.getElementById("remaining")
const computerScoreEl = document.getElementById("computer-score")
const myScoreEl = document.getElementById("my-score")

async function handleClick() {
    const resp = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    const data = await resp.json()
    remainingCards.textContent = "Remaining cards: " + data.remaining
    deckId = data.deck_id
}

function determineCardWinner(card1, card2) {
    // const cardValues = {
    //     "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, 
    //     "9": 9, "JACK": 10, "QUEEN": 11, "KING": 12, "ACE": 13
    // }

    // return cardValues[card1] > cardValues[card2] ? "card1 win" : 
    // cardValues[card2] > cardValues[card1] ? "card2 win" :
    // "It's a tie!"

    const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "JACK", "QUEEN",    
            "KING", "ACE"]

    const card1Index = cardValues.indexOf(card1)
    const card2Index = cardValues.indexOf(card2)

    return card1Index > card2Index ? (computerScore++, "Computer wins!") : 
        card2Index > card1Index ? (myScore++, "You win!") :
        "War!"
}

// retrive a new deck
newDeckBtn.addEventListener("click", handleClick)

// draw two new cards
drawCardBtn.addEventListener("click", async () => {
    const resp = await fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    const data = await resp.json()
    if (data.remaining === 0) {
        drawCardBtn.disabled = true

        computerScore > myScore ? header.textContent = "The computer won the game!" : myScore > computerScore ? header.textContent = "You won the game!" : "It is a tie game!"
    }

    // fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    //     .then(resp => resp.json())
    //     .then(data => {
    //         if (data.remaining === 0) {
    //             drawCardBtn.disabled = true

    //             computerScore > myScore ? header.textContent = "The computer won the game!" : myScore > computerScore ? header.textContent = "You won the game!" : "It is a tie game!"
    //         }

    remainingCards.textContent = "Remaining cards: " + data.remaining

    cardsContainer.children[0].innerHTML = `
        <img src="${data.cards[0].image}" class="card-size"/>
    `
    cardsContainer.children[1].innerHTML = `  
        <img src="${data.cards[1].image}" class="card-size"/>

    `

    const result = determineCardWinner(data.cards[0].value, data.cards[1].value)

    setTimeout(() => {
        header.textContent = result, 500})

    computerScoreEl.textContent = `Computer score: ${computerScore}`
    myScoreEl.textContent = `My score: ${myScore}`
})


// {success: true, deck_id: 'cero8svt8rq4', cards: Array(2), remaining: 50}
// cards: Array(2)
// 0: {code: 'AS', image: 'https://deckofcardsapi.com/static/img/AS.png', images: {…}, value: 'ACE', suit: 'SPADES'}
// 1: {code: '5H', image: 'https://deckofcardsapi.com/static/img/5H.png', images: {…}, value: '5', suit: 'HEARTS'}
// length: 2
// [[Prototype]]: Array(0)
// deck_id: "cero8svt8rq4"
// remaining: 50
// success: true

