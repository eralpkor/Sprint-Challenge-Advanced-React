import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, waitForElement } from "@testing-library/react";
import PlayerList, { getPlayers } from "./components/PlayerList";
import PlayerCard from "./components/PlayerCard";
import { Simulate } from "react-dom/test-utils";

// test("renders without crashing", async () => {
//   await render(<App />);
// });

test("should have text players", () => {
  const { getByText, findByText, debug } = render(
    <PlayerCard name={"Alex"} country={"Germany"} />
  );
  getByText(/Alex/i);
  getByText(/Germany/);
  debug();
});
