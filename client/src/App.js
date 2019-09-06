import React from "react";
import PlayerList from "./components/PlayerList";
import Nav from "./hooks/Nav";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <PlayerList />
    </div>
  );
}

export default App;
