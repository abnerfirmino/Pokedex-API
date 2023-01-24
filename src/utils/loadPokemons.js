// Função asíncrona que carrega todos pokemons da 1ª geração via Fetch API

const loadPokemons = async () => {
  try {
    const response = fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');

    const [pokemons] = await Promise.all([response]);

    const pokemonsJson = await pokemons.json();

    const results = pokemonsJson.results;

    const detailsRequests = await results.map((result) => fetch(result.url));

    const [detailsResponses] = await Promise.all([detailsRequests]);

    const detailsResponsesJson = await detailsResponses.json();

    return detailsResponsesJson;
  }
  catch(error) {
    console.error(error);
  }
}

export { loadPokemons }
