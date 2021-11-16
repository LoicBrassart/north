import { useState } from 'react';

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

const useDarkTheme = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  const themeToggler = () => {
    if (theme === THEMES.LIGHT) setTheme(THEMES.DARK);
    else setTheme(THEMES.LIGHT);
  };

  return [theme, themeToggler];
};

export default useDarkTheme;
