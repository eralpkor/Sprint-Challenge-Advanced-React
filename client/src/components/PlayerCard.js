import React from "react";
import "./PlayerCard.css";

function PlayerCard(props) {
  const { name, country, searches } = props;
console.log(props)
  return (
    <div className="card">
      <div className='top'>
        <p>{name}</p>
        <i className="far fa-futbol"></i>
      </div>
      <p>{country}</p>
      <p>{searches}</p>
    </div>
  );
}

export default PlayerCard;
