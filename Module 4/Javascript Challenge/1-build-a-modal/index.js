const overlayEl = document.getElementById("overlay");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");

openModalBtn.addEventListener("click", function() {
    overlayEl.style.display = "block";
})

closeModalBtn.addEventListener("click", function() {
    overlayEl.style.display = "none";
})