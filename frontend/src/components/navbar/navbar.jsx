import React from 'react'
import './navbar.css'
const navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-icon">
        <p>Riyaz</p>
      </div>
      <div className="navbar-menu">
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Certificate</li>
        </ul>
      </div>
      <div className="contact-btn">
        <button>Contact me</button>
      </div>
    </div>
  )
}
export default navbar;