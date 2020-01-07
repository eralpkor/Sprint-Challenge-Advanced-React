import React from "react";
import PlayerList from "./components/PlayerList";
import Nav from "./hooks/Nav";
import ChartCard from './components/ChartCard';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <ChartCard />
      <PlayerList />
    </div>
  );
}

export default App;
