import { useState } from "react";
import Proptypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  function handleAdd() {
    setCounter(counter + 1);
  }

  function handleSubtract() {
    if (counter === 0) return alert("Counter can't be negative");
    setCounter(counter - 1);
  }

  function handleReset() {
    setCounter(value);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: Proptypes.number,
};
