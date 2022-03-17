import { cleanup, screen, render, fireEvent } from "@testing-library/react";
import React from "react";
import App from "../../../App";
import Context from "../../store/context";
import TestContext from "../TestContext";

afterEach(cleanup);

it("Context value is update by child component", () => {
  render(
    <App>
      <Context.Provider>
        <TestContext />
      </Context.Provider>
    </App>
  );
  expect(screen.getByText(/Some/i).textContent).toBe("Some Text");
  fireEvent.click(screen.getByText("Change Text"));
  expect(screen.getByText(/Some/i).textContent).toBe("Some Other Text");
});
