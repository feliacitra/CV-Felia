import React from 'react';

export const themes = {
  dark: {
    color: 'black',
    background: '#7FFFD4',
  },
  light: {
    color: 'black',
    background: '	White',
  },
};
const ThemeContext = React.createContext(themes.dark);
export default ThemeContext;
