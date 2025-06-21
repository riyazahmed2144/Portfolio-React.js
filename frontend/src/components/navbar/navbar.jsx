import React, { useEffect, useState } from 'react'
import './navbar.css'

const Navbar = () => {
  const [isscrolled, setisscrolled ] = useState(false);
    useEffect(() => {
      const handlescroll = () => {
        setisscrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handlescroll);
      return () => window.removeEventListener('scroll', handlescroll);
    }, []);
      return (
    <div className={`navbar ${isscrolled ? 'scrolled' : ''}`}>
      <div className="nav-icon">
        <h2>Riyaz Ahmed</h2>
      </div>
      <div className="navbar-menu">
        <ul>
          <li><a href="#main">About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='https://drive.google.com/file/d/11kSBsPNI5-_4WxtNK3YZv3DcS5HKkQ_t/view?pli=1'>Resume</a></li>
        </ul>
      </div>
      <div className="contact-btn">
        <button><a href='#contact'>Contact me</a></button>
      </div>
    </div>
  )
}
export default Navbar;