import React, { Component } from 'react';
import axios from 'axios';

const playerURL = 'http://localhost:5000/api/players';


class PlayerList extends Component {
  componentDidMount() {
    axios.get(playerURL)
    .then(response => {
      console.log(response.data[0])
    })
    .catch(err => console.log(err))
  }

  render() {
    return <h1>Hello Players</h1>
  }
}

export default PlayerList;