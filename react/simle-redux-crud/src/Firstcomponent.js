import React, { createContext, useContext, useState } from 'react';

// Create a context
const ThemeContext = createContext();

// Create a provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MyComponent/>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };


const MyComponent = () => {
  // Consume the theme context using useContext
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    // Toggle between light and dark themes
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div style={{ background: theme === 'light' ? '#ffffff' : '#333333', color: theme === 'light' ? '#333333' : '#ffffff' }}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default MyComponent;
