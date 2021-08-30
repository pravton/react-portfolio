import React from 'react';

function Nav({currentTheme, setTheme, setCurrentTheme }) {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo-name">Clinton.</h1>
      </div>
      <nav className="nav-container">
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
        <div className="theme-switch-container">
          <input onClick={() => setTheme(currentTheme, setCurrentTheme)} type="checkbox" id="toggle-switch" name="toggle-switch" className="toggle-input" />
          <label htmlFor="toggle-switch" className="toggle-label">
          </label>
        </div>
      </nav>
    </header>
  )
}

export default Nav;