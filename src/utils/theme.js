// function to set the theme to local storage and the theme
const setTheme = (currentTheme) => {
  localStorage.setItem('currentTheme', currentTheme);
  document.documentElement.className = currentTheme;
}

// function for setting the theme
const switchTheme = (currentTheme, setCurrentTheme) => {
  if(currentTheme === 'light-theme') {
    setCurrentTheme('dark-theme');
  } else {
    setCurrentTheme('light-theme');
  }
  setTheme(currentTheme);
};

// function for mobile toggle 
const mobileMenuToggle = () => {
  const navContainer = document.querySelector('.nav-container');
  const navIcon = document.querySelector('#mobile-nav-icon');

  if(navContainer.className.includes('nav-hide')) {
    navContainer.classList.add('nav-show');
    navIcon.classList.add('nav-open');
    navContainer.classList.remove('nav-hide');
  } else {
    navIcon.classList.remove('nav-open');
    navContainer.classList.remove('nav-show');
    navContainer.classList.add('nav-hide');

  }
}

module.exports =  { setTheme, switchTheme, mobileMenuToggle };

