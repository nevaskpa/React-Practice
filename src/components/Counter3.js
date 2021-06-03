import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter + action.value,
      };
    case "decrement":
      return {
        ...currentState,
        firstCounter: currentState.firstCounter - action.value,
      };
    case "increment2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter + action.value,
      };
    case "decrement2":
      return {
        ...currentState,
        secondCounter: currentState.secondCounter - action.value,
      };
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};
function Counter3() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>First Counter {count.firstCounter}</p>
      <p>Second Counter {count.secondCounter}</p>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        -1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        +5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        -5
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 10 })}>
        +10
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 10 })}>
        -10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter3;
