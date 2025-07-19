import { createContext,useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.id) {
      const updatedUsers = users.map((u) => (u.id === user.id ? user : u));
      setUsers(updatedUsers);
    } else {
      const newUser = { ...user, id: crypto.randomUUID() };
      setUsers([...users, newUser]); // ✅ Save current user
    }

    setUser({
      name: "",
      email: "",
      phone: "",
      password: "",
    }); // ✅ Reset form
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
    <UserContext.Provider
      value={{
        user,
        users,
        handleChange,
        handleDelete,
        handleSubmit,
        handleEdit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;