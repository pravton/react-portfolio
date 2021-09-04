import React from 'react';
import Nav from '../../components/Nav';
import { mobileMenuToggle } from '../../utils/theme';

function Header({currentTheme, setTheme, setCurrentTheme, setCurrentLink, currentLink }) {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="/react-portfolio"><h1 className="logo-name">Clinton.</h1></a>
      </div>
      <div className="theme-switch-container">
          <div onClick={() => setTheme(currentTheme, setCurrentTheme)} className="icons-switch">
            <i className={`fas ${currentTheme === 'light-theme' ? `fa-sun` : `fa-moon`}`}></i>
          </div>
      </div>
      <Nav 
        setCurrentLink={setCurrentLink}
        currentLink={currentLink}/>
      <div id="mobile-nav-icon" className="mobile-nav-icon">
          <div onClick={mobileMenuToggle} id="burgerBtn">
          </div>
        </div>
    </header>
  )
}

export default Header;