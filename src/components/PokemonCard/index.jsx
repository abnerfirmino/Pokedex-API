import P from 'prop-types';

import './styles.css';

const PokemonCard = ({ name }) => {
  return (
    <li className="pokemon">
      <span className="number">#01</span>
      <span className="name">{name}</span>

      <div className="details">
        <ol className="types">
          <li className="type">grass</li>
          <li className="type">poison</li>
        </ol>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        alt="{name}" />
      </div>
    </li>
  );
}

export { PokemonCard }

PokemonCard.propTypes = {
  name: P.string.isRequired,
}
