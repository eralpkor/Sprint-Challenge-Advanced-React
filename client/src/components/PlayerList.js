import React, { Component } from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";
import ChartCard from './ChartCard';


import './PlayerCard.css';

const playerURL = "http://localhost:5000/api/players";

class PlayerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: JSON.parse(window.localStorage.getItem("players") || "[]")
    };
  }

  componentDidMount() {
    if (this.state.player.length === 0) this.getPlayers();
  }

  async getPlayers() {
    await axios
      .get(playerURL)
      .then(response => {
        this.setState({ player: response.data });
        window.localStorage.setItem("players", JSON.stringify(response.data));
      })
      .catch(err => console.log(err));
  }

  render() {
    // this.state.player.map(players => console.log(players));
    return (
      <div className='container'>
        {this.state.player.length ? (
          this.state.player.map(players => {
            return (
              <PlayerCard
                key={players.id}
                name={players.name}
                country={players.country}
                searches={players.searches}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default PlayerList;
