import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function modeToggler() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={`App ${darkMode ? "dark-body" : ""}`}>
        <Navbar 
          darkMode={darkMode}
          toggler={modeToggler}
        />
        <MainContent
          darkMode={darkMode}
        />
    </div>
  );
}

export default App;
