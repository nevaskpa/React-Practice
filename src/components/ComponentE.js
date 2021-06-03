import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentE() {
  const count = useContext(CountContext);

  return (
    <div>
      Count E - {count.countValue}
      <button onClick={() => count.countDispatch("increment")}>+</button>
      <button onClick={() => count.countDispatch("decrement")}>-</button>
      <button onClick={() => count.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentE;
