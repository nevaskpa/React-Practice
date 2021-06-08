import React, { createContext, useReducer } from "react";
import "./App.css";
// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// import ComponentC from "./components/ComponentC";
// import DataFetching3 from "./components/DataFetching3";
// import Counter4 from "./components/Counter4";
// import Counter2 from "./components/Counter2";
// import Counter3 from "./components/Counter3";
// import DataFetching2 from "./components/DataFetching2";
// import Person from "./Person/Person";
// import Counter from "./components/Counter";
// import DisplayName from "./components/DisplayName";
// import DisplayList from "./components/DisplayList";
import Edit from "./components/Edit";

// export const UserContext = React.createContext();

// const initialState = 0;

// const reducer = (currentState, action) => {
//   switch (action) {
//     case "increment":
//       return (currentState = currentState + 1);
//     case "decrement":
//       return (currentState = currentState - 1);
//     case "reset":
//       return initialState;
//     default:
//       return currentState;
//   }
// };

// export const CountContext = createContext();

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);

  return (
    // <UserContext.Provider value="Parnika">
    //   <DataFetching2 />
    // </UserContext.Provider>
    // <CountContext.Provider
    //   value={{ countValue: count, countDispatch: dispatch }}
    // >
    //   <div>
    //     Count {count}
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentC />
    //   </div>
    // </CountContext.Provider>
    <Edit />
  );
}

export default App;
