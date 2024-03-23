import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a Context
const ThemeContext = createContext();

// Step 2: Provide a Context Value
function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <h1>Theme Switcher</h1>
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
}

// Step 3: Consume the Context
function Toolbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      <span>Current Theme: {theme}</span>
    </div>
  );
}

export default App;
