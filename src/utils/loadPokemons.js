// Função asíncrona que carrega todos pokemons da 1ª geração via Fetch API

const loadPokemons = async () => {
  try {
    const response = fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');

    const [pokemons] = await Promise.all([response]);

    const pokemonsJson = await pokemons.json();

    return pokemonsJson.results;
  }
  catch(error) {
    console.error(error);
  }
}

export { loadPokemons }
