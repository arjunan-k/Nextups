import { useState } from "react";
import Output from "./Output";

function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      {!changedText && <p>It's good to see you...</p>}
      {changedText && <Output>changed</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
}

export default Greeting;
