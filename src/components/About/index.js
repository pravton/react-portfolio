import React from 'react';
import aboutImg from '../../images/cover.jpg';

function About() {
  return (
    <section id="about" className="about-section">
      <img src={aboutImg} alt="" />
      <h1 className="title">About Me!</h1>
      <p className="description">
      I am a full stack web developer currently taking a coding Boot Camp at University of Toronto. I help designers, small businesses and agencies to bring their ideas into reality. <br/>
      I love coding and I have a great passion about building intuitive UI and dynamic user experience. <br/>
      <span><a href="#contact">Any ideas on mind? Let's connect!</a> 👋</span>
      </p>
      <div className="contact-icons">
        <a href="tel:647-515-0170"><i class="fas fa-mobile"></i><span>Phone</span></a>
        <a href="mailto:pravton_dev@outlook.com"><i class="fas fa-at"></i><span>Email</span></a>
        <a href="https://github.com/pravton" target="_blank" rel="noreferrer"><i class="fab fa-github"></i><span>Github</span></a>
        <a href="https://app.codesignal.com/profile/pravton" target="_blank" rel="noreferrer"><i class="fas fa-code"></i><span>Code Signal</span></a>
        <a href="https://www.linkedin.com/in/pravton/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i><span>LinkedIn</span></a>
      </div>
    </section>
  )
}

export default About;