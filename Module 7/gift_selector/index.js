document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")

function calculate() {
    const food = parseInt(document.getElementById("food-type").value)
    const transport = parseInt(document.getElementById("transport-type").value)
    const areBallonsAdded = document.getElementById("ballon-checkbox").checked

    let cost = food + transport

    if (areBallonsAdded) {
        cost += 10
    }

    costEl.textContent = cost
}