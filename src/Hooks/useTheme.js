import { useState } from 'react';
import { behaviours, themes } from 'Themes';

const useTheme = () => {
  const [theme, setTheme] = useState(behaviours.baseTheme);

  const themeToggler = (themeName) => {
    const behavioursToAdd = themes.find((th) => {
      return th.code === themeName;
    }).modifiers;

    const newTheme = behavioursToAdd.reduce((prev, currBehaviour) => {
      return { ...prev, ...behaviours[currBehaviour] };
    }, behaviours.baseTheme);
    setTheme(newTheme);
  };

  return [theme, themeToggler];
};

export default useTheme;
