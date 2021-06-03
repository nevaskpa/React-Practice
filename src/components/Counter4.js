import React, { useReducer } from "react";

const initialState = 0;

const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};
function Counter4() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <p>First Counter {count}</p>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("reset")}>Reset</button>

      <p>Second Counter {countTwo}</p>
      <button onClick={() => dispatchTwo("increment")}>+</button>
      <button onClick={() => dispatchTwo("decrement")}>-</button>
      <button onClick={() => dispatchTwo("reset")}>Reset</button>
    </div>
  );
}

export default Counter4;
