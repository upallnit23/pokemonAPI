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
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        console.log

        if(!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error)
    }

}