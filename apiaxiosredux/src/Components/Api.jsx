import React from "react";
import { useGetPostQuery, useAddPostMutation ,useGetUserQuery} from "../Redux/Slice/apiSlice";

function Api() {
  const { data: posts } = useGetPostQuery();
 const {data:users}=useGetUserQuery();
  const [addPost] = useAddPostMutation();
  const data = {
    userId: 101,
    id: 101,
    title: "hello world",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };

  const postPost = async () => {
    try {
      const response = await addPost(data);
      alert("Data added", response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>List of Title</h1>
      <ul>
        {posts?.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
      <button onClick={postPost}>Submit</button>
      <h1>List of User</h1>
      <ul>
        {users?.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Api;
