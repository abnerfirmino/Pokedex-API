/* eslint-disable no-unused-vars */
import './styles.css';
import React, { useCallback, useEffect, useState } from 'react';
import { PokemonPosts } from '../../components/PokemonPosts';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';

// useLoadPokemons (Fetch -GET)
import { useLoadPokemons } from '../../hooks/useLoadPokemons';

// url global
const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';

const Home = () => {
  // Estados do componente
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [postsPerPage] = useState(20);

  // carregando os dados
  const { data } = useLoadPokemons(url);

  console.log(data);
  // Função para tratar o carregamento dos posts
  const handleLoadPokemons = useCallback(
    (offset, postsPerPage) => {
      setPosts(data.slice(offset, postsPerPage));
      setAllPosts(data);
    },
    [data],
  );

  // ciclo de vida do componente "Did Mount"
  useEffect(() => {
    handleLoadPokemons(0, postsPerPage);
  }, [handleLoadPokemons, postsPerPage]);

  // função para tratar a paginação
  const handleLoadMorePosts = () => {
    const nextPage = offset + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, postsPerPage + nextPage);

    posts.push(...nextPosts);
    setOffset(nextPage);
  };

  // lógica que desabilita o botão quando os posts acabarem
  const noMorePosts = offset + postsPerPage >= allPosts.length;

  return (
    <>
      <Header />

      <main className="main">
        <section className="content">
          <PokemonPosts posts={posts} />
          <Button
            text="Load More ..."
            onClick={handleLoadMorePosts}
            disabled={noMorePosts}
          />
        </section>
      </main>

      <Footer />
    </>
  );
};

export { Home };
