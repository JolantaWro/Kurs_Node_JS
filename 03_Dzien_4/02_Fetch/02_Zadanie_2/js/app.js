const URL = 'https://pokeapi.co/api/v2/pokemon';

const ulElement = document.querySelector('.list-group');

fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const pokemons = data.results;
        pokemons.forEach(pok => ulElement.innerHTML += `<li>${pok.name}</li>`)
    })
    .catch(resp => console.log(resp));

