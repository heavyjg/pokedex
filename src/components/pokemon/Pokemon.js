import React from "react";
import styles from "./Pokemon.module.css";

export default function (props) {
  return (
    <div className={styles.pokemon}>
      <div className={styles.pokemonBackground}>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" />
      </div>

      <h5 className={styles.pokemonNumber}>Nº 001</h5>
      <h4 className={styles.pokemonName}>Bulbasaur</h4>
      <div className={styles.pokemonTypes}>
        <div className={`${styles.pokemonType} ${styles.grass}`}>Grass</div>
        <div className={`${styles.pokemonType} ${styles.poison}`}>Poison</div>
      </div>
    </div>
  );
}
