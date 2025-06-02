import React from 'react';
import './App.css'
import Navbar from './components/navbar/navbar';
import About from './pages/main';
import Skills from './pages/skills';
import Hero from './components/hero/hero';
import Contact from './components/contact/contact';
function App() {
  return (
    <div>
      <Navbar />
        < Hero />
      <div id="main">
        <About />
      </div>
      < Skills />
      <div id='contact'>
        <Contact />
      </div>
    </div>
  );
}

export default App;

