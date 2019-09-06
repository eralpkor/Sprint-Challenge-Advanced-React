import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";
import PlayerList, { getPlayers } from "./components/PlayerList";
import PlayerCard from "./components/PlayerCard";
import { Simulate } from "react-dom/test-utils";

test("renders without crashing", async () => {
  await render(<App />);
});

test("should have text players", () => {
  const { findByText, debug } = render(
    <PlayerCard name={"Alex"} country={"Germany"} />
  );
  debug();
  findByText(/eralp/i);
});
