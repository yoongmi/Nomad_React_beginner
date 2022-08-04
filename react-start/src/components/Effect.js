import Button from "../Button";
import styles from "../App.module.css";
import { useState, useEffect } from "react";

function Effect() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeword] = useState("");
  const Clickbutton = () => setCounter(counter + 1);
  const onChange = (e) => setKeword(e.target.value);

  useEffect(() => {
    console.log("i run only once.");
  }, []);
  useEffect(() => {
    console.log("i run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("i run when 'counter' & 'keyword' changes.");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search here...."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={Clickbutton}>Click me</button>
      <br />
      <Button text={"text"} />
    </div>
  );
}

export default Effect;
