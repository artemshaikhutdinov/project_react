import { useState } from "react";

export default function Counter() {
  //   let counter = 0;

  const [counter, setCounter] = useState(0);

  function printCounter() {
    console.log(counter);
  }
  function handleAddOne() {
    setCounter(counter + 1);
  }
  function handleSubtractTwo() {
    setCounter((prev) => prev - 2);
  }
  function handleReset() {
    setCounter(0);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={handleAddOne}>
        +1
      </button>
      
      <button
        type="button"
        onClick={() => {
          setCounter((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <button type="button" onClick={handleSubtractTwo}>
        -2
      </button>
      <button type="button" onClick={printCounter}>
        Print to console
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
