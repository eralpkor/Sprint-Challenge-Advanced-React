import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";
import PlayerList from "./components/PlayerList";
import PlayerCard from "./components/PlayerCard";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test("should have text players", async () => {
  const { findByText } = await render(<PlayerCard />);
  findByText(/Ale/i);
});
