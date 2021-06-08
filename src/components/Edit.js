import React, { useState, useEffect } from "react";
import axios from "axios";

function Edit() {
  const [posts, setPosts] = useState([]);
  //const user = useContext(UserContext);
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id, val) => {
    const newPost = posts.filter((item) => {
      //console.log("item", item, id);
      if (item.id == id) {
        console.log("item", item, id);
        return item;
      } else return;
    });
    //console.log(newPost);
    newPost[0].title = val;

    setPosts([...posts, newPost]);
    setInput("");
  };
  return (
    <div>
      <p>Welcome </p>
      <input
        type="number"
        placeholder="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="New title"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleEdit(id, input)}>Update</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Edit;
