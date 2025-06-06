import React, { useEffect, useState } from 'react'
import './hero.css'
const Hero = () => {
  const words = ["Shaping", "Creating", "Innovating", "Building"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="hero">
      <div className="head">
        <div className="heading-line">
         <h2 className="shaping fade">{words[index]}</h2>
        <p>The Future, one line <br />of code at a time.</p>
      </div>      
        <p>Hi, I'm Riyaz Ahmed, a developer with a passion for code</p>
      </div>
      <div className="right">
        <div className="circle"></div>
      </div>
    </div>
  )
}
export default Hero;