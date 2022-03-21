const usernameInputEl = document.getElementById("usernameInput");

usernameInputEl.addEventListener("keyup", function(event) {
    let searchQuery = event.target.value.toLowerCase();
    const allNamesDOMCollection = document.getElementsByClassName("name");

    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();

        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[counter].style.display = "block";
        } else {
            allNamesDOMCollection[counter].style.display = "none";
        };
    };
});