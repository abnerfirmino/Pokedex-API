import P from 'prop-types';

import './styles.css';

const PostCard = ({ id, title, cover, body }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>
          {id} - {title}
        </h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export { PostCard };

PostCard.propTypes = {
  id: P.number.isRequired,
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
};
