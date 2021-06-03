import React, { useState } from "react";

function DisplayName() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })} //setter function of useState does not merge the state automatically, hence need to use the spread operator
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />

      <p>firstName: {name.firstName} </p>
      <p>lastName: {name.lastName} </p>
    </form>
  );
}

export default DisplayName;
