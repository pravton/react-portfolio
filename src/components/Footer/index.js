import React from 'react';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();


  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h3><strong>Clinton.</strong></h3>
        <p>Crafted with ❤️ by <strong><a href="https://github.com/pravton" target="_blank" rel="noreferrer">Pravton</a></strong></p>
        <p>© {year} All Rights Reserved</p> 
      </div>
    </footer>
  )
}

export default Footer;