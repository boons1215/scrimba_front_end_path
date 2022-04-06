// url 
const url = "https://apis.scrimba.com/jsonplaceholder"
const endPoint = "/posts"

// elements
const formEl = document.getElementById("new-post")
const titleInput = document.getElementById("post-title")
const bodyInput = document.getElementById("post-body")
const blogList = document.getElementById("blog-list")
let postsArray = []

function renderPosts() {
    for (let post of postsArray) {
        blogList.innerHTML += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
    }
}

fetch(url + endPoint)
    .then(resp => resp.json())
    .then(data => {
        console.log(postsArray)
        renderPosts()
    })

formEl.addEventListener("submit", function(event) {
    event.preventDefault()
    const postTitle = titleInput.value
    const postBody = bodyInput.value
    const data = {
        title: postTitle,
        body: postBody
    }
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    fetch(url + endPoint, options)
        .then(resp => resp.json())
        .then(data => {
            postsArray.unshift(data)
            blogList.innerHTML = ""
            renderPosts()
            formEl.reset()
        })
})