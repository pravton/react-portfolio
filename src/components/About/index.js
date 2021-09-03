import React from 'react';
import ContactIcons from '../ContactIcons';
import aboutImg from '../../images/cover.jpg';

const workExperince = [
  {
    title : "Web Developer",
    company : "Innomactic",
    yearsExperience : 2,
  },
  {
    title : "Web Developer",
    company : "Innomactic",
    yearsExperience : 2,
  }
]

function About() {
  return (
      <section id="about" className="about-section">
        <img src={aboutImg} alt="" />
        <h1 className="title">About Me!</h1>
        <p className="description">
        I am a full stack web developer currently taking a coding Boot Camp at University of Toronto. I help designers, small businesses and agencies to bring their ideas into reality. <br/>
        I love coding and I have a great passion about building intuitive UI and dynamic user experience. <br/>
        <span><a href="#contact"><strong>Any ideas on mind? <span className="sp-connect">Let's connect!</span></strong></a> 👋</span>
        </p>
        <ContactIcons />
      </section>
  )
}

export default About;

