import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";
import PlayerList, { getPlayers } from "./components/PlayerList";
import PlayerCard from "./components/PlayerCard";
import { Simulate } from "react-dom/test-utils";

it("renders without crashing", async () => {
  await render(<App />);
});

test("should have text players", async () => {
  const { findByText } = await render(<App />);
  findByText(/Alex/i);
});
