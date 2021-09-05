import React from 'react';
import ContactIcons from '../ContactIcons';
import aboutImg from '../../images/cover.jpg';



function About({setCurrentLink}) {
  return (
    <section id="about" className="about-section">
    <img src={aboutImg} alt="" />
    <h2 className="title-2">About Me.</h2>
    <p className="description">
    I am a full stack web developer currently taking a coding Boot Camp at University of Toronto. I work with designers, small businesses and agencies to bring their ideas into reality. <br/>
    I love coding and I have a great passion about building intuitive UI and dynamic user experience. <br/><br/>
    <span className="cust-links" onClick={() => setCurrentLink('Contact')}><strong>Any ideas on mind? <span className="sp-connect">Let's connect!</span></strong> 👋</span>
    </p>
    <ContactIcons />
    </section>
  )
}

export default About;

