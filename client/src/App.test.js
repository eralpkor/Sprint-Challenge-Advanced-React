import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, waitForElement } from "@testing-library/react";
import PlayerList, { getPlayers } from "./components/PlayerList";
import PlayerCard from "./components/PlayerCard";
import { Simulate } from "react-dom/test-utils";
// import "jest-dom/extend-expect";

// test("renders without crashing", async () => {
//   await render(<App />);
// });

test("should have text players", async () => {
  const { findByText } = await render(
    <PlayerCard name={"Alex"} country={"Germany"} />
  );
  // waitForElement(() => findByText(/Alex/i));
  // debug();
});
