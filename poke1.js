/*fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => {
    if(!response.ok) {
        throw new Error("Could not fetch resource");
    }
    return response.json();
})
.then(data => console.log(data.id))
.catch(error => console.error(error));*/


async function fetchData() {
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/${pokemonName}");

        if(!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprits.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        <h2>Abilities:</h2>
        <ul>
            ${fetchPokemonData.abilities.map(ability => "<li>${ability.ability.name}</li>").join("")}
        </ul>

        console.log(data.abilities);
    }
    catch{error}{
        console.error(error)
    }

}