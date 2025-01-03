import { FaBeer } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css'
function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
