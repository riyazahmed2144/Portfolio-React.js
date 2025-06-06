import React from 'react'
import './skills.css'
import { FaReact, FaJava, FaGitAlt } from 'react-icons/fa';
const Skills = () => {
  return (
       <div className="float">
        <div className="heading">
          <h2>My Preferred Tech Stack</h2>
        </div>
        <div className='floating-logos'>
        <div className="rea">
  <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="logo" />
  <p>React <br /> Developer</p>
  </div>
  <div className="jav">
<img
  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
  alt="Java"
  className="logo"
/>
<p>Java <br />Developer</p>
</div>
<div className="dev">
<img src="https://cdn.simpleicons.org/git/F05032" alt="Git" className="logo" />
<p>DevOps</p>
</div>
</div>
</div>
  )
}
export default Skills;