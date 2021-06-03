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
function Counter2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count {count}</p>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default Counter2;
