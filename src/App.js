import "./App.css";
import Pokemon from "./components/pokemon/Pokemon";
import { useState, React } from "react";
import Searchbar from "./components/searchbar/Searchbar";
import { getPokemon } from "./services/PokeService";

function App() {

  const [pokemon, setPokemon] = useState("");

  const fetchPokemon = (pokemon) => {
    setPokemon("");

    getPokemon(pokemon).then((data) => {
      const pokemon = {
        name: data.name,
        id: data.id,
        types: data.types.map((type) => type.type.name),
        image: data.sprites.front_default,
      };

      setPokemon(pokemon)
    });
  };
  return (
    <div>
      <div className="App">
        <Searchbar
          callback={(pokemon) => {
            fetchPokemon(pokemon);
          }}
        />

        <div className="pokeball">
          {pokemon !== "" && <Pokemon {...pokemon} />}
        </div>
      </div>
    </div>
  );
}

export default App;
