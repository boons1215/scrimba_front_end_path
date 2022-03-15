const myEmojis = ["😬", "🤩", "😙"]
let emojiContainer = document.getElementById("emojiContainer")
let emojiInput = document.getElementById("emoji-input")
let pushBtn = document.getElementById("push-btn")
let unshiftBtn = document.getElementById("unshift-btn")
let popBtn = document.getElementById("pop-btn")
let shiftBtn = document.getElementById("shift-btn")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement("span")
        emoji.innerHTML = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function() {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})