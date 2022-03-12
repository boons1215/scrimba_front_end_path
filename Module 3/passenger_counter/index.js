let count = 0
let total = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    total += count
    let countStr = count + " - "
    saveEl.textContent += countStr
    totalEl.textContent = "Total: " + total
    count = 0
    countEl.innerText = count
}

