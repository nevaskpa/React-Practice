import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <p>Welcome {user}</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
