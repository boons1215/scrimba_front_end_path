const guestList = ['Tom', 'Mary', 'Clare', 'John', 'Liz'];

const guestsHTML = guestList.map(function(guest) {
    return `<div class="box">${guest}</div>`;
});

document.getElementById('list').innerHTML = guestsHTML.join(" ");

//

const cssClassesArray = ['btn', 'btn-primary', 'btn-active', 'btn-sidebar']

const cssClassesString = cssClassesArray.join(' ')

