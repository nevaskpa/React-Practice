import axios from "axios";
import React, { useEffect, useState } from "react";
import DataFetching from "./DataFetching";

function DataFetching2() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [buttonId, setButtonId] = useState(1);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
      .then((res) => {
        setPost(res.data);
        //console.log(res);
      })
      .catch((err) => console.log(err));
  }, [buttonId]);

  const handleClick = () => {
    setButtonId(id);
    setShowAll(false);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Get Result</button>
      {post.title}
      {showAll && <DataFetching />}
    </div>
  );
}

export default DataFetching2;
