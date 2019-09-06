import React, { Component } from "react";

class PlayerCard extends Component {
  // component(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default PlayerCard;
