import React from 'react'
import './experience.css'
const Experience = () => {
  return (
    <div className='experience-container'>
        <div className="timeline-line"></div>
        <div className="experience-item left">
        <h3>Frontend Developer</h3>
        <p>Company A — 2023</p>
      </div>

      <div className="experience-item right">
        <h3>Intern</h3>
        <p>Company B — 2022</p>
      </div>
    </div>
  )
}
export default Experience;