import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [themes, setThemes] = useState({
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
  })

  const toggleTheme = () => setThemes({ ...themes, isLightTheme: !themes.isLightTheme });

  return (
    <ThemeContext.Provider value={{ ...themes, toggleTheme: toggleTheme }}>
      { props.children }
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;