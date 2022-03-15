let alphaList = "abcdefghijklmnopqrstuvwxyz";
let numericList = '0123456789';
let symbolList = '!@#$%^&*()_+~}{[]:;?><,.-=';
let isStart = false;
let passwordLength = 10;

let pass1El = document.getElementById("pass1-el");
let pass2El = document.getElementById("pass2-el");
let pass3El = document.getElementById("pass3-el");
let pass4El = document.getElementById("pass4-el");

// tmp
// let passwordLength = 26

function rangeSlide(sliderValue) {
    document.getElementById('rangeValue').textContent = sliderValue;
    passwordLength = sliderValue;
}

// determine the length of each word type as objects
function wordTypeLength() {
    if (isStart) {
        let num = Math.floor(Math.random() * numericList.length);
        let alpha = Math.floor(Math.random() * (passwordLength - num));
        let symbol = passwordLength - alpha - num;
    
        return {num, alpha, symbol};
    }
}

// generate words based on the given length
function generateWords(wordList, length) {
    let word = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * wordList.length);
        word += wordList[randomIndex];
    }

    return {word};
}

// shuffle words
function shuffleWords(word) {
    let splitedWord = word.split(""),
        n = splitedWord.length;
    
    for (let i = 0; i < n; i++) {
        let random = Math.floor(Math.random() * (i + 1));
        let tmp = splitedWord[i];
        splitedWord[i] = splitedWord[random];
        splitedWord[random] = tmp;
    }
    return splitedWord.join("");
}

function start() {
    isStart = true;
    let passwordList = [];

    for (let i = 0; i < 4; i++) {
        let wordLength = wordTypeLength();
        let numericPass = generateWords(numericList, wordLength.num);
        let alphaPass = generateWords(alphaList, wordLength.alpha);
        let symbolPass = generateWords(symbolList, wordLength.symbol);
        let combinePass = numericPass.word + alphaPass.word + symbolPass.word 
        passwordList.push(shuffleWords(combinePass));
    }

    pass1El.value = passwordList[0];
    pass2El.value = passwordList[1];
    pass3El.value = passwordList[2];
    pass4El.value = passwordList[3];
}

// 1 click password 
function copyPassword() {
    this.select();
    navigator.clipboard.writeText(this.value);
    alert("Password copied! 👍");
}

// 1 click event listener
pass1El.addEventListener('click', copyPassword);
pass2El.addEventListener('click', copyPassword);
pass3El.addEventListener('click', copyPassword);
pass4El.addEventListener('click', copyPassword);