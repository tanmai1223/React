import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setUsers, editUser } from "../Redux/Slices/userSlice";

export default function () {
  const user = useSelector((state) => state.userdata.user);
  const users=useSelector((state)=>state.userdata.users)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUser({ ...user, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id && users.some((u) => u.id === user.id)) {
      dispatch(editUser(user));
    } else {
      dispatch(setUsers({ ...user, id: crypto.randomUUID() }));
    }

    dispatch(
      setUser({
        name: "",
        email: "",
        phone: "",
        password: "",
      })
    );
  };
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Number"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">{user.id ? "Update" : "Save"}</button>
      </form>
    </div>
  );
}
