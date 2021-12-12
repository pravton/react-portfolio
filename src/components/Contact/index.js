import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import ContactIcons from '../ContactIcons';
import emailjs from 'emailjs-com';

function Contact() {
  // form validation
  const formData = {
    name: "",
    email: "",
    message: ""
  }

  const [ formDetails, setFormDetails ] = useState(formData);
  const { name, email, message } = formDetails;
  const [ errorMessage, setErrorMessage ] = useState('');

  function handleChange(e) {
    if(e.target.name === 'email') {
      if(!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } 
      const isValid = validateEmail(e.target.value);
      if(!isValid) {
        setErrorMessage('Please enter a valid email address!');
      } else {
        setErrorMessage('');
      } 
    } else {
      if(!e.target.value.length) {
        setErrorMessage(`${e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)} is required.`);
        document.querySelector('.error-text').style.color = 'red';
      } else {
        setErrorMessage('');
      }
    }

    if(!errorMessage) {
      setFormDetails({...formDetails, [e.target.name]: e.target.value});
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(name.length && email.length && message.length) {
    document.querySelector('.error-text').style.color = 'green';
    setErrorMessage('Sending...');  
    emailjs.sendForm('service_c7kxqtt', 'template_5i6cymm', e.target, 'user_UGci4USn5Q0qobiw5r0mD')
    .then((result) => {
      console.log(result);
      setErrorMessage('Thank you for your message! I will get back to you within 24-48 hours!');
    }, (error) => {
        console.log(error.text);
        document.querySelector('.error-text').style.color = 'red';
        setErrorMessage('Oops! Something went wrong. Please try again!');
    });
    setFormDetails(formData);
    document.getElementById('contact-form').reset();
    } else {
      document.querySelector('.error-text').style.color = 'red';
      setErrorMessage('One or more fields are empty. Please try again!');
    }
  }

  return (
    <section className="contact-section">
      <h2 className="title-2">Let's Connect.</h2>
      <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
          <div className="form-input-container">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} required/>
          </div>
          <div className="form-input-container">
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required/>
          </div>
          <div className="form-input-container">
            <label htmlFor="message">Message:</label>
            <textarea rows="5" name="message" onChange={handleChange} required></textarea>
          </div>
          <div className="error-container">
            <p className="error-text">{errorMessage}</p>
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