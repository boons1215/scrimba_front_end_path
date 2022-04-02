import characterData from "./data.js";
import {Character} from "./character.js";

let monstersArray = ["orc", "demon", "goblin"];
const attackBtn = document.getElementById("attack-button");

function attack() {
    wizard.setDiceHtml();
    monster.setDiceHtml();

    wizard.takeDamage(monster.currentDiceScore);
    monster.takeDamage(wizard.currentDiceScore);

    render();

    if (wizard.dead) {
        attackBtn.disabled = true;
        endGame();
    } else if (monster.dead) {
        attackBtn.disabled = true;
        if (monstersArray.length > 0) {
            setTimeout(() => {
                monster = getNewMonster();
                render();
                attackBtn.disabled = false;
            }, 1500);
        } else {
            endGame();
        }
    };
};

function endGame() {
    const endEmoji = wizard.health > 0 ? "🔮" : "☠️";

    const endMessage = wizard.health === 0 && monster.health === 0 ?
        "No victors - all creatures are dead" :
        wizard.health > 0 ? "The Wizard Wins" :
        `The ${monster.name} is Victorious`;

    setTimeout(() => {
        document.body.innerHTML = `
            <div class="end-game">
                <h2>Game Over</h2>
                <h3>${endMessage}</h3>
                <p class="end-emoji">${endEmoji}</p>
            </div>
        `;
    }, 1500);
};

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()];
    return nextMonsterData ? new Character(nextMonsterData) : {};
};

function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
    document.getElementById("monster").innerHTML = monster.getCharacterHtml();
};

attackBtn.addEventListener("click", attack);

const wizard = new Character(characterData.hero);
let monster = getNewMonster();

render();