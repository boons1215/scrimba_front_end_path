function getLottoNumbers() {
    const winningNums = []
    for (let i = 0; i < 6; i++) {
        winningNums.push(Math.round(Math.random() * 100))
    }

    return winningNums
}

function getWinningNumbersHtml() {
    document.getElementById("winning-numbers").innerHTML = ""

    return getLottoNumbers().map(function(number) {
        return `<div class="number">${number}</div>`
    }).join('')

}

document.getElementById("winning-numbers").innerHTML = getWinningNumbersHtml()