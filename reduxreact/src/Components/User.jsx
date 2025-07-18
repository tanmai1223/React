import React from "react";
import { useState } from "react";
import { setUserData, setUserList, setActive } from "../Redux/Slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

function User() {
  const muser = useSelector((state) => state.user.user);
  const active = useSelector((state) => state.user.isActive);
  console.log(muser);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data entered", user);
    setUser({
      name: "",
      email: "",
      password: "",
    });
    dispatch(setUserData(user));
    dispatch(setUserList(user));
    dispatch(setActive());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={user.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Email"
          value={user.email}
          name="email"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Password"
          value={user.password}
          name="password"
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
        {active ? <h1>{muser.name}</h1> : <h1>Click show</h1>}
        
      </form>
    </div>
  );
}

export default User;
