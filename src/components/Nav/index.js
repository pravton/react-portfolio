import React from 'react';
import { mobileMenuToggle } from '../../utils/theme';

function Nav({ setCurrentLink, currentLink }) {

  const navList = ['About Me', 'Work', 'Contact', 'Resume'];

  return (
    <nav className="nav-container nav-hide">
      <ul className="nav">
        {navList.map(nav => (
          <li className="nav-item"
            key={nav}>
            <span
            className={`${currentLink === nav && 'nav-active'}`}
            onClick={() => {
              setCurrentLink(nav);
              mobileMenuToggle();
            }}>{nav}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;