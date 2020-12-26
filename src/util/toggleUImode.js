const toggleUImode = (UImode, setUImode) => {

  const newMode = UImode && UImode.toLowerCase() === 'dark-mode' ? 'light-mode' : 'dark-mode';
  setUImode(newMode);
  localStorage.setItem('edaUImode', newMode); // eslint-disable-line no-undef
  return newMode;
};

export default toggleUImode;