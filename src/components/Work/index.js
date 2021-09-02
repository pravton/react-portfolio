import React from 'react';


function Work() {

  const works = [
    {
      projectLink: 'https://coworkers-group2.herokuapp.com/',
      title: 'Coworkers: Employee Management System',
      description: 'HTML, CSS, Javascript, Node, Express & MySQL',
      bgImage: require(`../../images/projects/coworkers.jpg`).default,
      github: 'https://github.com/Group2Project2UofTCoding/coworkers'
    },
    {
      projectLink: 'https://pravton.github.io/weather-dashboard/',
      title: 'Weather Dashboard',
      description: 'HTML, CSS, & Javascript',
      bgImage: require(`../../images/projects/weather-dashboard.jpg`).default,
      github: 'https://github.com/pravton/weather-dashboard'
    },
    {
      projectLink: 'https://coworkers-group2.herokuapp.com/',
      title: "What's Happening Dashboard",
      description: 'HTML, CSS & Javascript',
      bgImage: require(`../../images/projects/covidDashboard.jpg`).default,
      github: 'https://github.com/Teamtoo222/Project-1-UofT'
    },
    {
      projectLink: 'https://budget-tracker-simple.herokuapp.com/',
      title: 'Budget Tracker PWA',
      description: 'Javascript, Node, Express, MongoDB & Mongoose',
      bgImage: require(`../../images/projects/budget-tracker.jpg`).default,
      github: 'https://github.com/pravton/simple-budget-tracker-pwa'
    },
    {
      projectLink: 'https://pravton.github.io/food-festival/',
      title: 'Food Festival',
      description: 'HTML, CSS, Javascript, IndexedDB, Webpack & PWA',
      bgImage: require(`../../images/projects/food-festival.jpg`).default,
      github: 'https://github.com/pravton/food-festival'
    },
    {
      projectLink: 'https://pravton.github.io/get-it-done/',
      title: "Get it Done!",
      description: 'HTML, CSS & Javascript',
      bgImage: require(`../../images/projects/get-it-done.JPG`).default,
      github: 'https://github.com/pravton/get-it-done'
    },
    {
      projectLink: 'https://secret-anchorage-53620.herokuapp.com/',
      title: 'Zoo-Keeper',
      description: 'HTML, CSS, Javascript, Node, Express',
      bgImage: require(`../../images/projects/zoo-keeper.jpg`).default,
      github: 'https://github.com/pravton/zookeepr'
    },
    {
      projectLink: 'https://pravton.github.io/taskinator/',
      title: 'Taskinator',
      description: 'HTML, CSS, & Javascript',
      bgImage: require(`../../images/projects/taskinator.JPG`).default,
      github: 'https://github.com/pravton/taskinator'
    },
    {
      projectLink: 'http://just-tech-blog.herokuapp.com/',
      title: 'Taskinator',
      description: 'HTML, CSS, Javascript, Node, Express, MySQL & Sequelize',
      bgImage: require(`../../images/projects/tech-blog.jpg`).default,
      github: 'https://github.com/pravton/tech-blog'
    },
    // {
    //   projectLink: 'https://pravton.github.io/team-profile-generator/',
    //   title: 'Team Profile Generator CLI',
    //   description: 'HTML, CSS, Javascript & Node',
    //   bgImage: require(`../../images/projects/team-profile.jpg`).default,
    //   github: 'https://github.com/pravton/team-profile-generator'
    // },
  ]

  function linkClick (link) {
    window.open(link, '_blank');
  }

  return (
    <section id="works" className="">
    <h1 className="title-2">Recent Projects.</h1>  
    <div className="works">
      {works.map((work, i) => (
        <div className="work" key={i} style={{backgroundImage: `url(${work.bgImage})`}}>
          <a href={work.projectLink} target="_blank" rel="noreferrer" className="work-container">
              <div className="work-info" >
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <div className="work-info-icons">
                    <span onClick={() => linkClick(work.github)} className="wii-link"><i className="fab fa-github"></i></span>
                    <span onClick={() => linkClick(work.projectLink)} className="wii-link"><i className="fas fa-globe"></i></span>
                </div>
              </div>
          </a>
        </div>
      ))}
    </div>  
    </section>
  )
}

export default Work;