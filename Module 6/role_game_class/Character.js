import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "./utils.js";

class Character {
    constructor(data) {
        Object.assign(this, data)
        this.diceHtml = getDicePlaceholderHtml(this.diceCount).join('');
        this.maxHealth = this.health;
    }

    setDiceHtml() {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceHtml = this.currentDiceScore.map(num => 
            `<div class="dice">${num}</div>`
        ).join('');
    };

    takeDamage(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num);

        this.health -= totalAttackScore;

        if (this.health <= 0) {
            this.health = 0;
            this.dead = true;
        };
    };

    getHealthBarHtml() {
            const percent = getPercentage(this.health, this.maxHealth);

            return `
                <div class="health-bar-outer">
                    <div class="health-bar-inner ${percent <= 25? "danger": ""}" 
                    style="width: ${percent}%;">
                    </div>
                </div>
            `;
    };

    getCharacterHtml() {
        const healthBar = this.getHealthBarHtml();

        return `
            <div class="character-card">
                <h4 class="name"> ${this.name} </h4>
                <img class="avatar" src="${this.avatar}" />
                <div class="health">health: <b> ${this.health} </b></div>
                ${healthBar}
                <div class="dice-container">
                    ${this.diceHtml}
                </div>
            </div>
        `;
    };
};


export {Character};