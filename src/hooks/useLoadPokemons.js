// Carrega todos pokemons da 1ª geração via Fetch API

import { useEffect, useState } from 'react';

const useLoadPokemons = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // controle de memory leak
    const controller = new AbortController();
    const controllerSignal = controller.signal;

    const loadPokemons = async () => {
      try {
        const response = fetch(url, { signal: controllerSignal });

        const [pokemons] = await Promise.all([response]);

        const pokemonsJson = await pokemons.json();

        const results = await pokemonsJson.results;

        // Promises em paralelo
        const details = await Promise.all(
          results.map((result) => fetch(result.url).then((r) => r.json())),
        );
        setData(details);

        setError(false);
      } catch (error) {
        if (error.message.includes('The user aborted a request.')) {
          console.log('Fetch finalizado!');
        } else {
          console.error(error.message);
          setError('OPS! Houve um erro ao carregar os dados :(');
        }
      }
    };

    loadPokemons();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, error };
};

export { useLoadPokemons };
