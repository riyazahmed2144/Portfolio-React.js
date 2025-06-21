import React from 'react';
import './App.css'
import Navbar from './components/navbar/navbar';
import About from './pages/main';
import Skills from './pages/skills';
import Hero from './components/hero/hero';
import Contact from './components/contact/contact';
import Experience from './pages/experience';
import Works from './pages/works';
function App() {
  return (
    <div className='container'>
      <Navbar />
        < Hero />
      <div id="main">
        <About />
      </div>
      < div id="experience">
      <Experience />
      </div>
      <div id="works">
      <Works />
      </div>
      <div id='skills'>
        <Skills />
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </div>
  );
}

export default App;

