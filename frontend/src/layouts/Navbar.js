import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">Full Stack Application</a>
          <Link className='btn btn-outline-light' to="/adduser">Add User</Link>
        </div>
      </nav>
    </div>
  )
}
