/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { loadPokemons } from '../../utils/loadPokemons';
import { PokemonPosts } from '../../components/PokemonPosts';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

const Home = () => {

  // Estados do componente
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);

  // Função para carregar os dados
  const handleLoadPokemons = useCallback(
    async (page, postsPerPage) => {
      const postsArray = await loadPokemons();

      setPosts(postsArray.slice(page, postsPerPage));
      setAllPosts(postsArray);
  }, []);

  // Função do ciclo de vida do componente 'Did Mount'
  useEffect(() => {
    handleLoadPokemons(0, postsPerPage);
  }, [handleLoadPokemons, postsPerPage]);

  return (
    <>
      <Header />

      <main className="main">
        <section className="content">
          <PokemonPosts posts={posts} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export { Home }
