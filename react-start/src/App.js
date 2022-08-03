import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const Clickbutton = () => setCounter(counter + 1);
  console.log("render");
  useEffect(() => {
    console.log("i run only once.");
  }, []);
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={Clickbutton}>Click me</button>
      <Button text={"text"} />
    </div>
  );
}

export default App;
