import P from 'prop-types';

import './styles.css';

import { PokemonCard } from '../PokemonCard';

const PokemonPosts = ({ posts = [] }) => {
  return (
    <ol className="pokemons">
      {posts.map((post) => (
        <PokemonCard key={post.name} name={post.name} />
      ))}
    </ol>
  );
}

export { PokemonPosts }

PokemonPosts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      name: P.string.isRequired,
      url: P.string,
    }),
  ),
}
