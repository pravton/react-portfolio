import React, {useState} from 'react';
import './App.css';
import { setTheme, switchTheme } from './utils/theme';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

// components
import Nav from './components/Nav';

function App() {
  const [ currentTheme, setCurrentTheme ] = useState(localStorage.getItem('currentTheme') || 'light-theme');
  // set the current theme
  setTheme(currentTheme);
  // set the current link
  const [ currentLink, setCurrentLink ] = useState('About Me');
  return (
    <div className={`App ${currentTheme}`}>
      <Nav 
        currentTheme={currentTheme}
        setTheme={switchTheme}
        setCurrentTheme={setCurrentTheme}
        setCurrentLink={setCurrentLink}/>
        {currentLink === 'About Me' && <About key="about" />}
        {currentLink === 'Work' && <Work key="work" />}
        {currentLink === 'Contact' && <Contact key="contact"/>}
        {currentLink === 'Resume' && <Resume key="resume"/>}
      <Footer/>
    </div>
  );
}

export default App;
