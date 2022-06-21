import React from "react";
import styles from "./Pokemon.module.css";

const Pokemon = (props) => {
  return (
    <div className={styles.pokemon}>
      <div className={styles.pokemonBackground}>
        <img alt="Pokemon" src={props.image} />
      </div>

      <h5 className={styles.pokemonNumber}>Nº {props.id}</h5>
      <h4 className={styles.pokemonName}>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h4>
      <div className={styles.pokemonTypes}>
        <div className={`${styles.pokemonType} ${styles.grass}`}>{props.types[0]}</div>
        <div className={`${styles.pokemonType} ${styles.poison}`}>{props.types[1]}</div>
      </div>
    </div>
  );
}

export default Pokemon;