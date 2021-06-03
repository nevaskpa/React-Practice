import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const incCount = () => {
    setCount(count + 1);
  };

  const decCount = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const incFive = () => {
    setCount(count + 5);
  };
  return (
    <div>
      Count: {count}
      <button onClick={incCount}>Increase!</button>
      <button onClick={decCount}>Decrease!</button>
      <button onClick={reset}>Reset!</button>
      <button onClick={incFive}>Increase by 5!!</button>
    </div>
  );
}

export default Counter;
