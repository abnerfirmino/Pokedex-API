import PropTypes from 'prop-types';

import './styles.css';

const PokemonCard = ({ id, name, types, img }) => {
  return (
    <li className={'pokemon ' + types[0].type.name}>
      <span className="number">#0{id}</span>
      <span className="name">{name}</span>

      <div className="details">
        <ol className="types">
          {types.map((typeSlot) => (
            <li className={'type ' + typeSlot.type.name} key={typeSlot.slot}>
              {typeSlot.type.name}
            </li>
          ))}
        </ol>
        <img src={img.other.dream_world.front_default} alt={name} />
      </div>
    </li>
  );
};

export { PokemonCard };

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  img: PropTypes.object.isRequired,
};
