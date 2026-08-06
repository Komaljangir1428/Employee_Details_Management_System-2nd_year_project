import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function AddUser() {

  let navigate = useNavigate()

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });

  const { name, username, email } = user

  const onInputChange = (e) => {

    setUser({ ...user, [e.target.name]: e.target.value })

  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1. Send data to backend
      const response = await axios.post("https://employee-management-backend.onrender.com/user", user);
      console.log("Response:", response.data);
      alert("User added successfully!");
      
      // 2. Redirect back to Home page
      navigate("/");
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to submit: " + (error.response?.data?.message || error.message));
    }
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className='form-control'
                placeholder="Enter your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className='form-control'
                placeholder="Enter your Username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className='form-control'
                placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className='btn btn-outline-primary'>Submit</button>
            <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
