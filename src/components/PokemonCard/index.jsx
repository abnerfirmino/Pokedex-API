import P from 'prop-types';

import './styles.css';

const PokemonCard = ({ id, name, types }) => {
  return (
    <li className="pokemon">
      <span className="number">#0{id}</span>
      <span className="name">{name}</span>

      <div className="details">
        <ol className="types">
          {types.map((typeSlot) => (
            <li key={typeSlot.slot} className='type'>{typeSlot.type.name}</li>
          ))}
        </ol>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        alt={name} />
      </div>
    </li>
  );
}

export { PokemonCard }

PokemonCard.propTypes = {
  id: P.number.isRequired,
  name: P.string.isRequired,
  types: P.array.isRequired,
}
