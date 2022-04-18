const count = 5
const offset = 5

async function getCategories(count, offset) {
    let resp = await fetch(`https://jservice.io/api/categories?count=${count}&offset=${offset}`)
    let data = await resp.json()
    return data
}

function getClueHtml(value) {
    return `<div class="my-category-clue" style="grid-row-start: ${value / 100 + 1}">$${value}</div>`
}

function getCategoryHtml(category) {
    return `
        <div class="my-category-title">${category.title}</div>
        ${getClueHtml(100)}
        ${getClueHtml(200)}
        ${getClueHtml(300)}
        ${getClueHtml(400)}
    `
}

getCategories(count, offset).then(categories => {
    console.log(categories)
    document.body.innerHTML = `
        <div class="board">
            ${categories.map(getCategoryHtml).join('')}
        </div>
    `
})