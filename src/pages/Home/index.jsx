import React from 'react';
import { loadPokemons } from '../../utils/loadPokemons';
import { PokemonPosts } from '../../components/PokemonPosts';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

// função para tratar o carregamento dos dados
const handleLoadPokemons = async () => {
  const pokemonsJson = await loadPokemons();
  console.log(pokemonsJson);
}

handleLoadPokemons();

const Home = () => {

  return (
    <>
      <Header />

      <main className="main">
        <section className="content">
          <PokemonPosts posts={} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export { Home }
