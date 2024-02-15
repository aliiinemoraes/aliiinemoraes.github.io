const pokeContainer = document.querySelector("#pokeContainer");
const pokemonCount = 108
const colors = {
  fire: '#e75f4f',
  grass: '#5bd166',
  electric: '#ebe884',
  water: '#41aeff',
  ground: '#d2b48c',
  rock: '#888888' ,
  fairy: '#d790b6',
  poison: '#cf9bcc',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#b2d5ff',
  fighting: '#b0b0b0',
  normal: '#c1a8a3',
  undefined: '#20b2aa'
}
const mainTypes = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonCount; i++) {
      await getPokemons(i)
  }

}

const getPokemons = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const resp = await fetch(url)
  const data =  await resp.json()
  createPokemonCard(data)
 }
const createPokemonCard = (poke) => {
  const card = document.createElement('div')
  card.classList.add("pokemon")

  const name = poke.name[0].toUpperCase() + poke.name.slice(1)
  const id = poke.id.toString().padStart(3,'0')

  const pokeTypes = poke.types.map(type => type.type.name)
  const type = mainTypes.find(type => pokeTypes.indexOf(type) > -1)
  const color = colors[type]

  card.style.backgroundColor = color

  const pokemonInnerHTML = `
  <div class="imgContainer">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="${name}">
        </div>
        <div class="info">
          <span class="number"> #${id}</span>
          <h3 class="name">${name}</h3>
          <small class="type">Type: <span>${type}</span></small>
        </div>
        `

    card.innerHTML = pokemonInnerHTML

    pokeContainer.appendChild(card)
}

fetchPokemons()