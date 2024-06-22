async function fetchData() {
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        console.log

        if(!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
        document.addEventListener('DOMContentLoaded', async () => {
            /*const pokemonName = document.getElementById("pokemonName").value.toLowerCase();*/
            const pokemonData = await fetchPokemonData('pokemonName');
            const pokemonInfoElement = document.getElementById('pokemon-info');
        
            pokemonInfoElement.innerHTML = `
                <h2>${pokemonName}</h2>
                <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                <h3>Abilities:</h3>
                <ul>
                    ${pokemonData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
                </ul>
                <h3>Base Experience:</h3>
                <p>${pokemonData.base_experience}</p>
            `;
        });
    }
    catch(error){
        console.error(error)
    }
}

/*document.addEventListener('DOMContentLoaded', async () => {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const pokemonData = await fetchPokemonData('pokemonName');
    const pokemonInfoElement = document.getElementById('pokemon-info');

    pokemonInfoElement.innerHTML = `
        <h2>${pokemonName}</h2>
        <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        <h3>Abilities:</h3>
        <ul>
            ${pokemonData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
        </ul>
        <h3>Base Experience:</h3>
        <p>${pokemonData.base_experience}</p>
    `;
});*/