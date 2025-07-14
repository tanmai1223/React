import React, { useState, useEffect, useRef } from 'react';

function Fact() {
    const [info, setInfo] = useState([]);
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        pic: "",
        name: "",
        email: "",
        password: "",
        gender: "",
        age: "",
        phoneNumber: ""
    });

    const fileInputRef = useRef(null);

    const handleData = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === "pic" ? URL.createObjectURL(files[0]) : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setData(prevData => [...prevData, formData]);

        // Reset the form state
        setFormData({
            pic: "",
            name: "",
            email: "",
            password: "",
            gender: "",
            age: "",
            phoneNumber: ""
        });

        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }
    };

    const callApi = async () => {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const result = await response.json();
        setInfo(result.results);
    };

    useEffect(() => {
        callApi();
    }, []);
    useEffect(() => {
        return () => console.log('unmounting');
    }, []);
    return (
        <div style={{ display: "flex", marginLeft: "45px", marginTop: "15px" }}>
            <div  >
                <h1><center>List of Users</center></h1>
                {(info.length > 0 || data.length > 0) ? (
                    <ul style={{
                        listStyleType: "none",
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        padding: "20px"
                    }}>
                        {/* API Users */}
                        {info.map((user, index) => (
                            <li key={`api-${index}`} style={cardStyle}>
                                <img
                                    src={user.picture.medium}
                                    alt={`${user.name.first} ${user.name.last}`}
                                    style={{ marginBottom: "10px" }}
                                />
                                <br />
                                Name: {user.name.first} {user.name.last} <br />
                                Email: {user.email} <br />
                                Gender: {user.gender} <br />
                                Age: {user.dob.age} <br />
                                Phone: {user.phone} <br />
                            </li>
                        ))}

                        {/* Submitted Users */}
                        {data.map((entry, index) => (
                            <li key={`form-${index}`} style={cardStyle}>
                                <img
                                    src={entry.pic || "https://via.placeholder.com/100"}
                                    alt={entry.name}
                                    style={{
                                        display: "block",
                                        width: "100px",
                                        height: "auto",
                                        margin: "0 auto 20px"
                                    }}
                                />
                                Name: {entry.name} <br />
                                Email: {entry.email} <br />
                                Gender: {entry.gender} <br />
                                Age: {entry.age} <br />
                                Phone: {entry.phoneNumber} <br />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading users...</p>
                )}
            </div>
            <div style={{
                height: "700px",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                padding: "20px",
                borderRadius: "10px"
            }}>
                <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
                    <h1 style={{ backgroundColor: "white" }}>Form</h1>
                    <label htmlFor="pic">Profile Picture :</label>

                    <input
                        type="file"
                        name="pic"
                        onChange={handleData}
                        ref={fileInputRef} // 👈 Attach the ref
                    />
                    <label htmlFor="name">Name :</label>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleData}
                    />
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleData}
                    />
                    <label htmlFor="password">Password :</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleData}
                    />
                    <label htmlFor="gender">Gender :</label>
                    <input
                        type="text"
                        placeholder="Gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleData}
                    />
                    <label htmlFor="age">Age :</label>
                    <input
                        type="number"
                        placeholder="Age"
                        name="age"
                        value={formData.age}
                        onChange={handleData}
                    />
                    <label htmlFor="phoneNumber">PhoneNumber :</label>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleData}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

const cardStyle = {
    height: "auto",
    width: "250px",
    padding: "25px",
    border: "2px solid black",
    backgroundColor: "antiquewhite",
    borderRadius: "15px",
    margin: "8px",
    textAlign: "center"
};

export default Fact;
