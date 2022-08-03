import styles from "./Pokebutton.module.css";

function Pokebutton(props) {
    return (
        <div className={styles.pokebuton} onClick={props.callback}>
            <div className={styles.upper}></div>
            <div className={styles.middle}></div>
            <div className={styles.little_button}></div>
            <div className={styles.bottom}></div>
        </div>
    )
}

export default Pokebutton;