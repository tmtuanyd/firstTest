import React from "react";
import Counter from "../Counter";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import App from "../../../App";

afterEach(cleanup);

it("Text in state is changed when button clicked", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText(/Clicked/i));
  expect(screen.getByText(/Clicked/i).textContent).toBe("Clicked: 1");
});

it("button click changes props", () => {
  render(
    <App>
      <Counter />
    </App>
  );
  expect(screen.getByText("test").textContent).toBe("test");
  fireEvent.click(screen.getByText("Change Name"));
  expect(screen.getByText("Tuan").textContent).toBe("Tuan");
});
