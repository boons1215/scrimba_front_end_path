// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => console.log(data));

// # long version
// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data)
//     });


fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        document.getElementById("image-container").innerHTML = `
            <img src="${data.message}" />
        `
    })

fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        document.getElementById("text").textContent = `
            ${data.activity} for ${data.participants}, ${data.price} for each person
        `
    })

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => console.log(data))

fetch("https://apis.scrimba.com/jsonplaceholder/todos", {method: "GET"})
    .then(response => response.json())
    .then(data => console.log(data))

fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
        method: "POST",
        body: JSON.stringify({
            title: "Buy Milk",
            completed: false
        }),
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))


fetch("https://apis.scrimba.com/jsonplaceholder/posts/2/comments")
    .then(response => response.json())
    .then(data => console.log(data))

fetch("https://apis.scrimba.com/jsonplaceholder/posts/2/comments/6")
    .then(response => response.json())
    .then(data => console.log(data))