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

module.exports =  { setTheme, switchTheme };

