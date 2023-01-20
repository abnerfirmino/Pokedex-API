//import { PokemonPosts } from '../../components/PokemonPosts';
// import { Button } from '../../components/Button';

const Home = () => {

  return (
    <>

    <header className="header">
      <section className="header__content">
          <h1 className="header__logo">
              <a href="#">Pokedex</a>
          </h1>
      </section>
    </header>

    <main className="main">
      <section className="content">
        <ol className="pokemons">
          <li className="pokemon">
            <span className="number">#001</span>
            <span className="name">Bulbasaur</span>

            <div className="details">
              <ol className="types">
                <li className="type">grass</li>
                <li className="type">poison</li>
              </ol>
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt="Bulbasaur" />
            </div>
          </li>
          {/* <li className="pokemon">
            Ivysaur
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
            alt="Ivysaur" />
          </li>
          <li className="pokemon">
            Venusaur
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
            alt="Venusaur" />
          </li>
          <li className="pokemon">
            Charmander
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
            alt="Charmander" />
          </li>
          <li className="pokemon">
            Charmeleon
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg"
            alt="Charmeleon" />
          </li>
          <li className="pokemon">
            Charizard
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
            alt="Charizard" />
          </li> */}
        </ol>
      </section>
    </main>

    <footer className="footer">
        <section className="footer__content">
            <div className="footer__developer">
                <a href="https://github.com/abnerfirmino">By Abner Firmino</a>
            </div>
            <div className="footer__poweredBy">
                <a href="https://www.dio.me/">Powered by DIO</a>
            </div>
        </section>
    </footer>

    </>
  );
}

export { Home };
