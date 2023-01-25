/* eslint-disable no-unused-vars */
import './styles.css';
import React, { useCallback, useEffect, useState } from 'react';
import { loadPokemons } from '../../utils/loadPokemons';
import { PokemonPosts } from '../../components/PokemonPosts';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';

const Home = () => {

  // Estados do componente
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [postsPerPage] = useState(20);

  // Função para tratar o carregamento dos posts
  const handleLoadPokemons = useCallback(
    async (offset, postsPerPage) => {
      const postsArray = await loadPokemons();

      console.log(postsArray);
      setPosts(postsArray.slice(offset, postsPerPage));
      setAllPosts(postsArray);
  }, []);

  // ciclo de vida do componente "Did Mount"
  useEffect(() => {
    handleLoadPokemons(0, postsPerPage);
  }, [handleLoadPokemons, postsPerPage]);

  return (
    <>
      <Header />

      <main className="main">
        <section className="content">
          <PokemonPosts posts={posts} />
          <Button text='Load More ...' />
        </section>
      </main>

      <Footer />
    </>
  );
}

export { Home }
