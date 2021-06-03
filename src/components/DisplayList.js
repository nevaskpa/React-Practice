import React, { useState } from "react";

function DisplayList() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setList([...list, e.target.value]);
      setValue("");
    }
  };
  return (
    <div>
      <ul>
        <input
          type="text"
          value={value}
          onChange={handleOnChange}
          onKeyPress={handleKeyPress}
        />
        {list.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayList;
