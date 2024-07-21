const pokName = document.getElementById('pokemon-name');
const idElement = document.getElementById('pokemon-id');
const weightEl = document.getElementById('weight');
const heightEl = document.getElementById('height');
const hpEl = document.getElementById('hp');
const attackEl = document.getElementById('attack');
const defenseEl = document.getElementById('defense');
const specialdefense = document.getElementById('special-attack');

const specialAttack = document.getElementById('special-attack');
const speedEl = document.getElementById('speed');
const typeEl = document.getElementById('types');

const searchBtn = document.getElementById('search-button');
const input = document.getElementById('search-input');
searchBtn.addEventListener("click", () => {
    const userInput = input.value.trim();
    getPokemon(userInput)

});
const getPokemon = (pokemonInfo) => {
    
      
    const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonInfo}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            displayPokemon(data);
            console.log(data)
           
        })
        .catch(error => {
            alert(error.message);
            clearPokemonData()
        });
}

const displayPokemon = (pokemonObj) => {
    const { name, id, weight, height, stats, sprites,types } = pokemonObj;

    pokName.textContent = `Name: ${name}`;
    heightEl.textContent = `Height: ${height}`;
    weightEl.textContent = `Weight: ${weight}`;
    idElement.textContent = `Id: ${id}`;
   
    const imageUrl = sprites.front_default;
    const hpObj = stats.find((el) => {return  el.stat.name === "hp" }).base_stat;
    hpEl.textContent = `Hp: ${hpObj}`; 
    console.log(pokemonObj)
    const attackObj = stats.find(el => el.stat.name === "attack").base_stat;
    attackEl.textContent = `Attack: ${attackObj}`;
    
    attackEl.style.color = "red";
    typeEl.textContent = `Type: ${types[0].type.name}`;

    const sp = stats.find(el => el.stat.name === "special-attack").base_stat;
    specialAttack.textContent = `Special-attack: ${sp}`;


    const def = stats.find(el => el.stat.name === "defense").base_stat;
    defenseEl.textContent = `Defense: ${def}`;


    const spdf = stats.find(el => el.stat.name === "special-defense").base_stat;
    specialdefense.textContent = `Special-Defense: ${spdf}`;

    const spd = stats.find(el => el.stat.name === "speed").base_stat;
    speedEl.textContent = `Speed: ${spd}`;


  
// Get the element with class "image-container"
const imgDiv = document.getElementsByClassName("image-container")[0];

const existingImg = imgDiv.querySelector('img');
if (existingImg) {
    imgDiv.removeChild(existingImg);
}
    
// Create a new <img> element
const imgEl = document.createElement("img");
imgEl.src = imageUrl; // Set the image source
imgEl.alt = "pokemon image"; // Set the alternative text for accessibility (optional)
imgEl.id = "image";   // Set the image ID (optional)

// Append the <img> element t the selected container
imgDiv.appendChild(imgEl);





    

} 



function clearPokemonData() {
    pokName.textContent = '';
    heightEl.textContent = '';
    weightEl.textContent = '';
    idElement.textContent = '';
    hpEl.textContent = '';
    attackEl.textContent = '';
    defenseEl.textContent = '';
    specialdefense.textContent = '';
    specialAttack.textContent = '';
    speedEl.textContent = '';
    typeEl.textContent = '';

    const imgEl = document.getElementById('image');
    imgEl.src = '';
}
