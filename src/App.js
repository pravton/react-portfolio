import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { setTheme, switchTheme } from './utils/theme';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';

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
        {currentLink === 'About Me' && <About key="1" />}
        {currentLink === 'Work' && <Work key="2" />}
        {currentLink === 'Contact' && <Contact key="3"/>}
        {currentLink === 'Resume' && <Resume key="4"/>}
    </div>
  );
}

export default App;
