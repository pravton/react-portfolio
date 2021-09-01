import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { setTheme, switchTheme } from './utils/theme';
import About from './components/About';

// components
import Nav from './components/Nav';

function App() {
  const [ currentTheme, setCurrentTheme ] = useState(localStorage.getItem('currentTheme') || 'light-theme');
  // set the current theme
  setTheme(currentTheme);
  
  return (
    <div className={`App ${currentTheme}`}>
      <Nav 
        currentTheme={currentTheme}
        setTheme={switchTheme}
        setCurrentTheme={setCurrentTheme}/>

      <About/>
    </div>
  );
}

export default App;
