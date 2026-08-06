import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
    try {
      // Fixed: changed /users/ to /user/ (singular)
      const result = await axios.get(`https://employee-management-backend.onrender.com/user/${id}`);
      setUser(result.data);
    } catch (error) {
      console.error("Error loading user details:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id : {id}
              <ul className='list-group list-group-flush mt-2'>
                <li className="list-group-item">
                  <b>Name : </b>{user.name}
                </li>
                <li className="list-group-item">
                  <b>UserName : </b>{user.username}
                </li>
                <li className="list-group-item">
                  <b>Email : </b>{user.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className='btn btn-primary my-3' to={"/"}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}