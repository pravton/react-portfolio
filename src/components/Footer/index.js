import React from 'react';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();


  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h3><strong>Clinton.</strong></h3>
        <p>Made with ❤️ using React!</p>
        <p>© {year} All Rights Reserved</p> 
      </div>
    </footer>
  )
}

export default Footer;