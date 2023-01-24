// Função asíncrona que carrega todos pokemons da 1ª geração via Fetch API

const loadPokemons = async () => {
  try {
    const response = fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');

    const [pokemons] = await Promise.all([response]);

    const pokemonsJson = await pokemons.json();

    const results = await pokemonsJson.results;

    // Promises em paralelo
    const details = await Promise.all(
      results.map((result) => fetch(result.url).then((r) => r.json()))
    );

    return details;
  }
  catch(error) {
    console.error(error);
  }
}

export { loadPokemons }
