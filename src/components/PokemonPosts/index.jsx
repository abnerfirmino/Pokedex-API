import P from 'prop-types';

import './styles.css';

import { PostCard } from '../PostCard';

const PokemonPosts = ({ posts = [] }) => (
  <div className="pokemons">
    {posts.map((post) => (
      <PostCard key={post.id} cover={post.cover} title={post.title} body={post.body} id={post.id} />
    ))}
  </div>
);

export { PokemonPosts };

PokemonPosts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      id: P.number.isRequired,
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
    }),
  ),
};
