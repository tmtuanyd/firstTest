import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import React from "react";
import axiosMock from "axios";
import TestAxios from "../TestAxios";

jest.mock("axios");

afterEach(cleanup);

it("Async axios request works", async () => {
  axiosMock.get.mockResolvedValue({ data: { title: "some title" } });
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  render(<TestAxios url={url} />);
  expect(screen.getByText(/...Loading/i).textContent).toBe("...Loading");
  const resolvedE1 = await waitFor(() => screen.findByTestId("title"));

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
  expect(resolvedE1).toHaveTextContent("some title");
});
