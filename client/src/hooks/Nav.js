import React from "react";
import useDarkMode from "../hooks/DarkMode";

import "../App.css";

function Nav() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <header className="App-header">
      <h1>Hello Players</h1>
      <button onClick={toggleMode}>Dark Mode</button>
    </header>
  );
}

export default Nav;
