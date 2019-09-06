import React, { Component } from "react";
import axios from "axios";
import PlayerCard from "./PlayerCard";

const playerURL = "http://localhost:5000/api/players";

class PlayerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: []
    };
  }
  componentDidMount() {
    axios
      .get(playerURL)
      .then(response => {
        this.setState({ player: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    this.state.player.map(players => console.log(players.name));
    return (
      <div>
        <h1>Hello Players</h1>
        {this.state.player.map(players => {
          return <p>{players.name}</p>;
        })}
        {/* {this.state.player.length ? (
          this.state.player.map(players => {
            <p>{players.name}</p>;
          })
        ) : (
          <p>Loading...</p>
        )} */}
      </div>
    );
  }
}

export default PlayerList;
