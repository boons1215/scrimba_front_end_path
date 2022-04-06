const callButtonEl = document.getElementById("call-button");

callButtonEl.addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        document.body.classList.add("fun")
        document.getElementById("activity-name").textContent = data.activity
        document.getElementById("title").textContent = "🦾 HappyBot🦿"
    })
});

