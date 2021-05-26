import "./App.css";
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1>Hello there!</h1>
      <Person name="PN" age="25" />
      <Person name="PB" age="26">
        I play soccer
      </Person>
      <Person name="KS" age="29" />
    </div>
  );
}

export default App;
