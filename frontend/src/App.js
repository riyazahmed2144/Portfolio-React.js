import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Main from'./pages/main';
import Skills from'./pages/skills';
function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Main/>
    <Skills/>
    </div>
  );
}

export default App;
