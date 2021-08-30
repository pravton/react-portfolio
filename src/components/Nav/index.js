import React from 'react';

function Nav({currentTheme, setTheme, setCurrentTheme }) {
  const mobileMenuToggle = () => {
    const navContainer = document.querySelector('.nav-container');
    const navIcon = document.querySelector('#mobile-nav-icon');
    if(navContainer.className.includes('nav-hide')) {
      navContainer.classList.add('nav-show');
      navIcon.classList.add('nav-open');
      navContainer.classList.remove('nav-hide');
    } else {
      navContainer.classList.add('nav-hide');
      navIcon.classList.remove('nav-open');
      navContainer.classList.remove('nav-show');
    }
  }

  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo-name">Clinton.</h1>
      </div>
      <div className="theme-switch-container">
          <input onClick={() => setTheme(currentTheme, setCurrentTheme)} type="checkbox" id="toggle-switch" name="toggle-switch" className="toggle-input" />
          <label htmlFor="toggle-switch" className="toggle-label">
          </label>
      </div>
      <nav className="nav-container nav-hide">
        <ul className="nav">
          <li className="nav-item">
            <a href="#about">About Me</a>
          </li>
          <li className="nav-item">
            <a href="#work">Work</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
          <li className="nav-item">
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
      <div id="mobile-nav-icon" className="mobile-nav-icon">
        <div onClick={mobileMenuToggle} id="burgerBtn"></div>
      </div>
    </header>
  )
}

export default Nav;