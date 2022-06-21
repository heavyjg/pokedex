import React from "react";
import { firstLetterCapitalCase } from "../utils/utils";
import styles from "./Pokemon.module.css";

const Pokemon = (props) => {
  const pokeType = styles[props.types[0]];
  const pokeType2 = styles[props.types[1]];

  return (
    <div className={styles.pokemon}>
      <div className={styles.pokemonBackground}>
        <img alt="Pokemon" src={props.image} />
      </div>

      <h5 className={styles.pokemonNumber}>Nº {props.id}</h5>
      <h4 className={styles.pokemonName}>{firstLetterCapitalCase(props.name)}</h4>
      <div className={styles.pokemonTypes}>
        <div className={`${styles.pokemonType} ${pokeType}`}>{firstLetterCapitalCase(props.types[0])}</div>
        {pokeType2 && <div className={`${styles.pokemonType} ${pokeType2}`}>{firstLetterCapitalCase(props.types[1])}</div>}
      </div>
    </div>
  );
}

export default Pokemon;