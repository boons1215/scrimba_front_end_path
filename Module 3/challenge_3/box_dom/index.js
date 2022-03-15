let box = document.getElementById("box")

box.addEventListener("click", function() {
    console.log("open");
})

//

// localStorage.setItem("test", "test value");
let retrieve = JSON.stringify(localStorage.getItem("test"));
console.log(JSON.parse(retrieve))

// 
let inputBtn = document.getElementById("input-btn")
let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

inputBtn.addEventListener("click", function() {
    console.log(data[0].score)
})