const row = document.querySelector('.row')
const SPRITEURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const APIURL = 'https://pokeapi.co/api/v2/pokemon/'



for (let i = 1; i <= 1008; i++) {
    const pokeBall = document.createElement('div')
    pokeBall.classList.add('col-sm-1')

    const imgPokemon = document.createElement('img')
    imgPokemon.src = `${SPRITEURL}${i}.png`

    const label = document.createElement('span')
    label.innerText = `#${i}`

    const name = document.createElement('p')
    fetch(APIURL + i).then(response => response.json()).then(data => {
        const pokemonName = data.name
        name.innerText = pokemonName.toUpperCase()
    })

    row.appendChild(pokeBall)
    pokeBall.appendChild(imgPokemon)
    pokeBall.appendChild(label)
    pokeBall.appendChild(name)
}