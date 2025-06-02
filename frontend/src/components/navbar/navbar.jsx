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
          <li><a href="#main">About</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#certificate'>Certificate</a></li>
        </ul>
      </div>
      <div className="contact-btn">
        <button><a href='#contact'>Contact me</a></button>
      </div>
    </div>
  )
}
export default navbar;