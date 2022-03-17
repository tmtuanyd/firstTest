import React from "react";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import * as reducer from "../../store/reducer";
import * as Action from "../../store/action";
import Reducer from "../Reducer";

afterEach(cleanup);

describe("test the reducer and actions", () => {
  it("should return the initial state", () => {
    expect(reducer.initialState).toEqual({ state1: false });
  });
  it("should change state1 from false to true", () => {
    expect(reducer.Reducer1(reducer.initialState, Action.SUCCESS)).toEqual({
      state1: true,
    });
  });
});

it("Reducer changes state from false to true", () => {
  render(<Reducer />);
  expect(screen.getByText(/state1 is/i).textContent).toBe("state1 is false");
  fireEvent.click(screen.getByText("Dispatch Success"));
  expect(screen.getByText(/state1 is/i).textContent).toBe("state1 is true");
});
