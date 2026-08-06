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
    alert("Attempting to send data to Render...");

    try {
      const response = await axios.post(
        "https://employee-management-backend.onrender.com/user",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      alert("SUCCESS! User added with ID: " + response.data.id);
      navigate("/");
    } catch (error) {
      console.error("Full Axios Error:", error);

      if (error.response) {
        // The server responded with a status code outside the 2xx range
        alert(
          `SERVER ERROR (${error.response.status}): ` +
            JSON.stringify(error.response.data)
        );
      } else if (error.request) {
        // The request was made but no response was received (CORS, network failure, or backend down)
        alert("NETWORK ERROR: Backend server did not respond or blocked request (CORS/Cold Start).");
      } else {
        // Something went wrong setting up the request
        alert("REQUEST ERROR: " + error.message);
      }
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
