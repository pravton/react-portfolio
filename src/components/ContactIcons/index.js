import React from 'react';

function ContactIcons() {
  return (
    <div className="contact-icons">
        <a href="tel:647-515-0170"><i className="fas fa-mobile"></i><span>Phone</span></a>
        <a href="mailto:pravton_dev@outlook.com"><i className="fas fa-at"></i><span>Email</span></a>
        <a href="https://github.com/pravton" target="_blank" rel="noreferrer"><i className="fab fa-github"></i><span>Github</span></a>
        <a href="https://app.codesignal.com/profile/pravton" target="_blank" rel="noreferrer"><i className="fas fa-code"></i><span>Code Signal</span></a>
        <a href="https://www.linkedin.com/in/pravton/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i><span>LinkedIn</span></a>
      </div>
  )
}

export default ContactIcons;