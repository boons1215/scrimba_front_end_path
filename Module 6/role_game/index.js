const hero = {
    elementId: "hero",
    name: "Wizard",
    avatar: "./images/wizard.png",
    health: 60,
    diceCount: 3
};

const monster = {
    elementId: "monster",
    name: "orc",
    avatar: "./images/orc.png",
    health: 10,
    diceCount: 1
};

function Character(type) {
    this.elementId = type.elementId;
    this.name = type.name;
    this.avatar = type.avatar;
    this.health = type.health;
    this.diceCount = type.diceCount;
    this.getCharacterHtml = function() {
        const { elementId, name, avatar, health, diceCount } = this;
        const diceHtml = getDiceHtml(diceCount)

        document.getElementById(elementId).innerHTML = `
                <div class="character-card">
                <h4 class="name">${name}</p>
                <img class="avatar" src=${avatar}>
                <p class="health">health: <b>${health}</b></p>
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>
        `
    };
};

function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map(function(dice) {
        return `<div class="dice">${dice}</div>`
    }).join('');
};

function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill().map(function() {
        return Math.floor(Math.random() * 6) + 1;
    });
};


const wizard = new Character(hero);
const orc = new Character(monster);
wizard.getCharacterHtml();
orc.getCharacterHtml();
