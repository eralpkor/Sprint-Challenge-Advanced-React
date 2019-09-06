import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function PlayerCard(props) {
  // const [someValue, setSomeValue] = useLocalStorage('App-header', initialValue);
  // useEffect(() => {
  //   if (someValue) {
  //     document.
  //   }
  // })

  const { name, country } = props;
  return (
    <div>
      <p>{name}</p>
      <p>{country}</p>
    </div>
  );
}

export default PlayerCard;
