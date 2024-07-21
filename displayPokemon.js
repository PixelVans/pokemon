const displayPokemon = (pokemonObj) => {
    const { name, id, weight, height, sprites, stats, types } = pokemonObj;
    pokName.textContent = `Name: ${name}`;
    idElement.textContent = `Id: ${id}`;
    height.textContent = `Height: ${id}`;
};
