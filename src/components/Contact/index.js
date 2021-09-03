import React, { useState } from 'react';
import ContactIcons from '../ContactIcons';

function Contact() {
  // form validation
  const formData = {
    name: "",
    email: "",
    message: ""
  }

  const [ formDetails, setFormDetails ] = useState(formData)

  return (
    <section className="contact-section">
      <h2 className="title-2">Let's Connect.</h2>
      <form id="contact-form" className="contact-form">
          <div className="form-input-container">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Enter your name"/>
          </div>
          <div className="form-input-container">
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" placeholder="Enter your email"/>
          </div>
          <div className="form-input-container">
            <label htmlFor="message">Message:</label>
            <textarea rows="5" name="message" ></textarea>
          </div>
          <div className="form-input-container">
            <p className="error-text"></p>
          </div>
          <div className="button-container">
            <button type="submit">Submit</button>
          </div>
      </form>
      <h2 className="title-2">Or</h2>
      <ContactIcons />
    </section>
  )
}

export default Contact;