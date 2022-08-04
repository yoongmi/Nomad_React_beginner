import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("Created!!");
    return () => console.log("bye!!");
  }, []);
  return <h1>Hello</h1>;
}

function Cleanup() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing && <Hello />}
    </div>
  );
}

export default Cleanup;
