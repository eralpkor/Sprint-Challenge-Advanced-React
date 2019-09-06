import React, { useEffect } from "react";

function PlayerCard(props) {
  const { name, country } = props;

  return (
    <div>
      <p>{name}</p>
      <p>{country}</p>
    </div>
  );
}

export default PlayerCard;
