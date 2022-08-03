import styles from "./Pokemon.module.css";

function Pokemon(props){
    return (
    <div className={styles.container}>
            <div className={styles.number}>#001</div>
            <div className={styles.name}>Charizard</div>
            <div className={styles.pcontainer}></div>
    </div>)
}

export default Pokemon;