import React from 'react';
import resumePDF from '../../images/Clinton-Sebastian-resume.pdf';

function Resume() {
  return (
    <section className="resume-section">
      <h2 className="title-2">Resume.</h2>
      <div className="history-container">
        <div className="history">
          <h4 className="title-4">Work History</h4>
          <div className="work-history">
            <p>1 <span className="sp-ml1"></span><span className="sp-purple">{`const`}</span> <span className="sp-orange">{`experienceDetails`}</span> <span className="sp-teal">{` = `}</span> <span className="sp-purple">{`[`}</span></p>
            <p>2 <span className="sp-purple sp-ml2">{`{`}</span></p>
            <p>3 <span className="sp-ml3"> <span className="sp-red">{`title`}</span> : <span className="sp-green">{`"Web Developer"`}</span>,</span></p>
            <p>4 <span className="sp-ml3"> <span className="sp-red">{`company`}</span> : <span className="sp-green">{`"Innomactic"`}</span>,</span></p>
            <p>5 <span className="sp-ml3"> <span className="sp-red">{`yearsExperience`}</span> : <span className="sp-orange">2</span>,</span></p>
            <p>6 <span className="sp-ml3"> <span className="sp-red">{`location`}</span> : <span className="sp-green">{`"Toronto"`}</span>,</span></p>
            <p>7 <span className="sp-ml2"> <span className="sp-purple">{`}`}</span>,</span></p>
            <p>8 <span className="sp-purple sp-ml1">{`]`}</span></p>
          </div>
        </div>
        <div className="history">
        <h4 className="title-4">Education History</h4>
          <div className="work-history">
          <p>1 <span className="sp-ml1"></span><span className="sp-purple">{`const`}</span> <span className="sp-orange">{`educationDetails`}</span> <span className="sp-teal">{` = `}</span> <span className="sp-purple">{`[`}</span></p>
          <p>2 <span className="sp-purple sp-ml2">{`{`}</span></p>
          <p>3 <span className="sp-ml3"> <span className="sp-red">{`field`}</span> : <span className="sp-green">{`"Coding Boot Camp"`}</span>,</span></p>
          <p>4 <span className="sp-ml3"> <span className="sp-red">{`program`}</span> : <span className="sp-green">{`"Full-Stack Development"`}</span>,</span></p>
          <p>5 <span className="sp-ml3"> <span className="sp-red">{`yearCompleted`}</span> : <span className="sp-orange">2021</span>,</span></p>
          <p>6 <span className="sp-ml3"> <span className="sp-red">{`school`}</span> : <span className="sp-green">{`"University of Toronto"`}</span>,</span></p>
          <p>7 <span className="sp-ml2"> <span className="sp-purple">{`}`}</span>,</span></p>
          <p>8 <span className="sp-purple sp-ml1">{`]`}</span></p>
          </div>
        </div>
      </div>
      <div className="resume-download">
        <h3 className="title-3">Download My Resume.</h3>
        <p>If you would like to know more, please download my resume!</p>
        <a className="downloadButton" href={resumePDF} download="resume_clinton.pdf">Download PDF</a>
      </div>
    </section>
  )
}

export default Resume;