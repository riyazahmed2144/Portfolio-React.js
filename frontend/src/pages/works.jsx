import React from 'react'
import './works.css'
import Main from '../components/assets/e-commerce-main.png'
import Second from '../components/assets/e-commerce-cart.png'
import Third from '../components/assets/e-commerce-all.png'
import One from '../components/assets/market-ss3.png'
import Two from '../components/assets/market-ss2.png'
import Three from '../components/assets/market-ss.png'
const Works = () => {
  return (
    <div className='works'>
        <h2>My Works</h2>
        <div className="e-commerce">
            <div className="over">
            <h3>E-commerce</h3>
            <span>React, Express, MongoDB</span>
            <button><a href="https://github.com/riyazahmed2144/E-Commerce-website-MERN-Stack-">View Project</a></button>
            </div>
            <div className="e-commerce-body">
                <div className="main-image">
            <img src={Main} alt="" />
            </div>
            <div className='side'>
                <img src={Second} alt="" />
                <img src={Third} alt="" />
            </div>
        </div>
        </div>
        <div className="e-commerce">
             <div className="over">
            <h3>Market Dashboard</h3>
            <span>HTML, Node.js, MongoDB</span>
            <button><a href="https://github.com/riyazahmed2144/E-Commerce-website-MERN-Stack-">View Project</a></button>
            </div>
            <div className='e-commerce-body'>
            <div className="main-image">
            <img src={One} alt="" />
            </div>
            <div className="side">
                <img src={Two} alt="" />
                <img src={Three} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}
export default Works;