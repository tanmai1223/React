import React, { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const preg = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;

    if (formData.name === '' || formData.name.length < 3) {
      return "Name not valid";
    }
    if (formData.email === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return "Email is not valid";
    }
    if (formData.password === '' || !preg.test(formData.password)) {
      return "Password is not valid";
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      alert(error);
      return;
    }
    setData(prevData => [...prevData, formData]); // store all submissions
    setFormData({ name: "", email: "", password: "" }); // clear form
  };

  return (
    <div>
      <center><h1>Form</h1></center>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleData}
          name='name'
          value={formData.name}
          placeholder='Name'
        />
        <input
          type="email"
          onChange={handleData}
          name='email'
          value={formData.email}
          placeholder='Email'
        />
        <input
          type="password"
          onChange={handleData}
          name='password'
          value={formData.password}
          placeholder='Password'
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Data:</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {data.map((entry, index) => (
          <li key={index}>
            Name: {entry.name} | Email: {entry.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
