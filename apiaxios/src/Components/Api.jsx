import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [post, setPost] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  const getPost = async () => {
    try {
      const response = await axios.get(url);
      setPost(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const data = {
    userId: 101,
    id: 101,
    title:
      "hello world",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };

  const postPost = async () => {
    try {
      await axios.post(url, data);
      alert("Data added")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>List of Title</h1>
      <ul>
        {post.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
      <button onClick={postPost}>Submit</button>
    </div>
  );
}

export default App;
