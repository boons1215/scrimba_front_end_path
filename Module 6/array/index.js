const endOfLevelBosses = new Array(10);

console.log(endOfLevelBosses)

//

const goldCoins = new Array(1000).fill("a");

console.log(goldCoins)

// 

const poisonMushrooms = new Array(1000).fill('🍄').map(function(mushroom) {
    return `<div>${mushroom}</div>`
}).join('')

console.log(poisonMushrooms)

document.getElementById("mushrooms").innerHTML = poisonMushrooms;

//

