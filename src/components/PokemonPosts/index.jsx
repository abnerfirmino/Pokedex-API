import PropTypes from 'prop-types';

import './styles.css';

import { PokemonCard } from '../PokemonCard';

const PokemonPosts = ({ posts = [] }) => {
  return (
    <ol className="pokemons">
      {posts.map((post) => (
        <PokemonCard
          key={post.id}
          id={post.id}
          name={post.name}
          types={post.types}
          img={post.sprites}
        />
      ))}
    </ol>
  );
};

export { PokemonPosts };

PokemonPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      types: PropTypes.array.isRequired,
      img: PropTypes.object,
    }),
  ),
};
