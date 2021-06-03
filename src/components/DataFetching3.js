import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  post: {},
  loading: true,
  error: "",
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        post: action.payload,
        loading: false,
        error: "",
      };
    case "FETCH_FAIL":
      return {
        post: {},
        loading: false,
        error: "Something went wrong!",
      };
    default:
      return currentState;
  }
};
function DataFetching3() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/100")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAIL" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading..." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetching3;
