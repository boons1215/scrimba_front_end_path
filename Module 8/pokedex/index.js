
async function getAllPokemon() {
    let resp = await fetch("./pokemon.json")
    let data = await resp.json()
    return data.slice(0, 100)
}

function getPokemonHtml(pokemon) {
    return `
    <div class="a-pokemon">
        <div class="a-pokemon-id">${pokemon.id}</div>
        <div class="a-pokemon-name">${pokemon.name.english}</div>
        <div class="a-pokemon-type">${pokemon.type.join(' / ')}</div>
        <div class="a-pokemon-stats">HP: ${pokemon.base.HP}</div>
        <div class="a-pokemon-stats">Attack: ${pokemon.base.Attack}</div>
        <div class="a-pokemon-stats">Defense: ${pokemon.base.Defense}</div>
        <div class="a-pokemon-stats">Speed: ${pokemon.base.Speed}</div>

        <div class="a-pokemon-alt-name">${pokemon.name.japanese}</div>
        <div class="a-pokemon-alt-name">${pokemon.name.chinese}</div>
        <div class="a-pokemon-alt-name">${pokemon.name.french}</div>
    </div>
    `
}

function displayPokedex(allPokemon) {
    document.body.innerHTML = `
    <div class="my-pokedex">
        ${allPokemon.map(pokemon => getPokemonHtml(pokemon)).join('')}
    </div>
    `
}

getAllPokemon().then(displayPokedex)