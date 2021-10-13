import React from 'react';
import ContactIcons from '../ContactIcons';
import aboutImg from '../../images/cover.jpg';



function About({setCurrentLink}) {
  return (
    <section id="about" className="about-section">
    <img src={aboutImg} alt="" />
    <h2 className="title-2">About Me.</h2>
    <p className="description">
    <span>Enthusiastic Full-Stack Developer who loves coding and have a great passion about building intuitive UI and dynamic user experience. <br/></span>
    <span>Certificate holder of Full-Stack Web Development Program (SCS Coding BootCamp) at University of Toronto, Skills in HTML, CSS, JavaScript, responsive web design, front-end and back-end technologies. <br/></span> 
    <span>Additional experience and skills in Git, Adobe Photoshop, Illustrator and XD. Strengths in meeting deadlines, creativity, eager to learn and teamwork. I approach every project with the aspect of intuitive UI/UX and agile development and my aim is to provide the best user experience for the audience with creative UX/UI designs. <br/></span>
    <span className="cust-links" onClick={() => setCurrentLink('Contact')}><strong>Any ideas on mind? <span className="sp-connect">Let's connect!</span></strong> 👋</span>
    </p>
    <ContactIcons />
    </section>
  )
}

export default About;

