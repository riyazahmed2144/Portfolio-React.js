import React from 'react'
import './navbar.css'
import Logo from '../assets/logo.png'
const navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-icon">
        <h2>Portfolio</h2>
      </div>
      <div className="navbar-menu">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#certificate'>Certificate</a></li>
        </ul>
      </div>
      <div className="contact-btn">
        <button>Contact me</button>
      </div>
    </div>
  )
}
export default navbar;