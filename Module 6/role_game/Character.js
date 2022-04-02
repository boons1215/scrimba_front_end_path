import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "./utils.js";

// constructor function
function Character(data) {
    Object.assign(this, data);

    this.diceHtml = getDicePlaceholderHtml(this.diceCount).join('');

    this.maxHealth = this.health;

    this.setDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        // this.diceArray = this.currentDiceScore.map(function(num) {
        //     return `<div class="dice">${num}</div>`
        // }).join('');
        this.diceHtml = this.currentDiceScore.map(num => `<div class="dice">${num}</div>`).join('');
    };

    this.takeDamage = function(attackScoreArray) {
        // const totalAttackScore = attackScoreArray.reduce(function(total, currentScore) {
        //     return total + currentScore;
        // });
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num);

        this.health -= totalAttackScore;

        if (this.health <= 0) {
            this.health = 0;
            this.dead = true;
        };
    };

    this.getHealthBarHtml = function() {
        const percent = getPercentage(this.health, this.maxHealth);

        return `
            <div class="health-bar-outer">
                <div class="health-bar-inner ${percent <= 25? "danger": ""}" 
                style="width: ${percent}%;">
                </div>
            </div>
        `;
    };

    this.getCharacterHtml = function() {
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