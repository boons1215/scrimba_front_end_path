// init variables
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
let player1CurrentDice = 0;
let player2CurrentDice = 0;
let roundOfRoll = 0;

// DOM elements
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1ScoreBoard = document.getElementById("player1ScoreBoard");
const player2ScoreBoard = document.getElementById("player2ScoreBoard");
const message = document.getElementById("message");
const diceStatus = document.getElementById("diceStatus");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

function showDisplay() {
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
};

rollBtn.addEventListener("click", function() {
    const dice = Math.floor(Math.random() * 6) + 1;
    
    if (player1Turn) {
        player1Score += dice;
        player1ScoreBoard.textContent = player1Score;
        player1CurrentDice = dice;
        player1Dice.textContent = dice;
        player1Dice.classList.remove("active");
        player2Dice.classList.add("active");
        message.textContent = "Player 2 Turn";
        roundOfRoll++;
    } else {
        player2Score += dice;
        player2ScoreBoard.textContent = player2Score;
        player2CurrentDice = dice;
        player2Dice.textContent = dice;
        player2Dice.classList.remove("active");
        player1Dice.classList.add("active");
        message.textContent = "Player 1 Turn";
        roundOfRoll++;
    }; 

    if (roundOfRoll === 2) {
        if (player1CurrentDice > player2CurrentDice) {
            diceStatus.textContent = "Player 1 dice won this round";
            message.textContent = "Player 2 Turn";
            player1Dice.classList.remove("active");
            player2Dice.classList.add("active");
            player1Turn = false;
        } else if (player2CurrentDice > player1CurrentDice) {
            diceStatus.textContent = "Player 2 dice won this round";
            message.textContent = "Player 1 Turn";
            player2Dice.classList.remove("active");
            player1Dice.classList.add("active");
            player1Turn = true;
        };
        roundOfRoll = 0;
    } else {
        player1Turn = !player1Turn;
        diceStatus.textContent = "-";
    }

    if (player1Score >= 20) {
        message.textContent = "Player 1 has won!";
        showDisplay();
    } else if (player2Score >= 20) {
        message.textContent = "Player 2 has won!"
        showDisplay();
    }
});

resetBtn.addEventListener("click", function() {
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    player1ScoreBoard.textContent = 0;
    player1Dice.textContent = '-';
    player2ScoreBoard.textContent = 0;
    player2Dice.textContent = '-';
    message.textContent = "Player 1 Turn";
    rollBtn.style.display = "block";
    resetBtn.style.display = "none";
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
});