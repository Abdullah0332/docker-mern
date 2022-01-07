import React, { useEffect, useState } from "react";
import AddPost from "./components/AddPost";
import axios from "axios";
import SinglePost from "./components/SinglePost";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetchAllPosts();
  }, []);
  const fetchAllPosts = () => {
    axios.get("http://localhost:5001/").then((res) => {
      setAllPosts(res.data);
    });
  };

  return (
    <div>
      <AddPost />
      <br />
      <ul>
        {allPosts.map((el) => (
          <SinglePost data={el} />
        ))}
      </ul>
    </div>
  );
};

export default App;
