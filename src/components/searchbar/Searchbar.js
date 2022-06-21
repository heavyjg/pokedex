import { useState, React } from "react";
import styles from "./Searchbar.module.css";

function Searchbar(props) {
  const [input, setInput] = useState("");

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      props.callback(input);
    }
  };

  return (
    <div className={styles.searchbox}>
      <input
        value={input}
        onInput={(e) => setInput(e.target.value)}
        className={styles.searchbar}
        type="text"
        placeholder="Digite o nome de um pokemon e aperte enter"
        onKeyDown={keyDownHandler}
      />
    </div>
  );
}

export default Searchbar;
