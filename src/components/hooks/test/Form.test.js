import {
  cleanup,
  fireEvent,
  getByTestId,
  render,
  screen,
} from "@testing-library/react";
import React from "react";
import TestForm from "../TestForm";

afterEach(cleanup);

it("Input text updates the state", () => {
  render(<TestForm />);
  expect(screen.getByText(/Change/i).textContent).toBe("Change: ");
  fireEvent.change(screen.getByLabelText("Input Text:"), {
    target: { value: "Text" },
  });
  expect(screen.getByText(/Change/i).textContent).not.toBe("Change: ");
});

it("submitting a form works correctly", () => {
  render(<TestForm />);
  expect(screen.getByText(/Submit Value/i).textContent).toBe("Submit Value: ");
  fireEvent.submit(screen.getByTestId("form"), {
    target: { text1: { value: "Text" } },
  });
  expect(screen.getByText(/Submit Value/i).textContent).not.toBe(
    "Submit Value: "
  );
});
