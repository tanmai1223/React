import React, { useState } from "react";
import * as Yup from "yup";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [users, setUsers] = useState([]);
  const [error, setError] = useState({});

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(user, { abortEarly: false });

      if (user.id) {
        const updatedUsers = users.map((u) => (u.id === user.id ? user : u));
        setUsers(updatedUsers);
      } else {
        const newUser = { ...user, id: crypto.randomUUID() };
        setUsers([...users, newUser]);
      }

      setError({});
      setUser({
        name: "",
        email: "",
        phone: "",
        password: "",
      });
    } catch (validationError) {
      const errors = {};
      if (validationError.inner) {
        validationError.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
      }
      setError(errors);
    }
  };

  const handleDelete = (id) => {
    const updatedData = users.filter((item) => item.id !== id);
    setUsers(updatedData);
  };

  const handleEdit = (id) => {
    const editedData = users.find((item) => item.id === id);
    setUser(editedData);
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
        {error.name && <span style={{ color: "red" }}>{error.name}</span>}
        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        {error.email && <span style={{ color: "red" }}>{error.email}</span>}
        <br /><br />

        <input
          type="text"
          placeholder="Enter Number"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />
        {error.phone && <span style={{ color: "red" }}>{error.phone}</span>}
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        {error.password && <span style={{ color: "red" }}>{error.password}</span>}
        <br /><br />

        <button type="submit">{user.id ? "Update" : "Save"}</button>
      </form>

      <h1>Data</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.password}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
