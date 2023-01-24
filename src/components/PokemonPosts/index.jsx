import P from 'prop-types';

import './styles.css';

import { PokemonCard } from '../PokemonCard';

const PokemonPosts = ({ posts = [] }) => {
  return (
    <ol className="pokemons">
      {posts.map((post) => (
        <PokemonCard key={post.id} id={post.id} name={post.name} types={post.types} />
      ))}
    </ol>
  );
}

export { PokemonPosts }

PokemonPosts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      id: P.number.isRequired,
      name: P.string.isRequired,
      types: P.array.isRequired
    }),
  ),
}
