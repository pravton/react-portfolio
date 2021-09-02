import React, {useState} from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import logo from './logo.svg';
import './App.css';
import { setTheme, switchTheme } from './utils/theme';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

// components
import Nav from './components/Nav';

function App() {
  const [ currentTheme, setCurrentTheme ] = useState(localStorage.getItem('currentTheme') || 'light-theme');
  // set the current theme
  setTheme(currentTheme);
  // set the current link
  const [ currentLink, setCurrentLink ] = useState('About Me');
  console.log(currentLink);
  
  return (
    <div className={`App ${currentTheme}`}>
      <Nav 
        currentTheme={currentTheme}
        setTheme={switchTheme}
        setCurrentTheme={setCurrentTheme}
        setCurrentLink={setCurrentLink}/>
      <CSSTransitionGroup
        transitionName="compAnimation"
        transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {currentLink === 'About Me' && <About />}
          {currentLink === 'Work' && <Work />}
          {currentLink === 'Contact' && <Contact />}
      </CSSTransitionGroup>
    </div>
  );
}

export default App;
