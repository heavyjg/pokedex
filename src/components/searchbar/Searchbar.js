import { useState, React } from "react";
import Pokebutton from "./pokebutton/Pokebutton";
import styles from "./Searchbar.module.css";

function Searchbar(props) {
  const [input, setInput] = useState("");

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      props.callback(input);
    }
  };
  
  const callback = () =>{
    console.log("pokebutton clicked");
  }

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
      <Pokebutton callback={callback} />
    </div>
    
  );
}

export default Searchbar;
