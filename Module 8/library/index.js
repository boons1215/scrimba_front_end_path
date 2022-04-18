
async function getBooks() {
    let resp = await fetch("./books.json")
    let data = await resp.json()
    let n = 1
    return data.map(book => {
        book.id = n
        n += 1
        return book
    })
}

function getBooksHtml(book) {
    return `
        <div class="my-book">
            <div class="my-book-cover">${book.title}</div>
            <div class="my-book-spine"></div>
            <div class="my-book-footer"></div>
        </div>
    `
}

function displayLibrary(books) {
    document.body.innerHTML = `
        <div class="my-library">
            ${books.map(getBooksHtml).join('')}
        </div>
    `
}

getBooks()
    .then(displayLibrary)
    .catch(e => console.log(e))