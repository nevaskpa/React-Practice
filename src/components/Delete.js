import React, { useState, useEffect } from "react";
import axios from "axios";

function Delete() {
  const [posts, setPosts] = useState([]);
  //const user = useContext(UserContext);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (i) => {
    const newPosts = posts.filter((item) => {
      if (item.title !== i) return item;
      else return;
    });

    setPosts(newPosts);
    setInput("");
  };
  return (
    <div>
      <p>Welcome </p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleDelete(input)}>Delete</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Delete;
