import { App } from "../mockingtest.jsx";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const fakeUser = [
  { firstName: "christian" },
  {
    firstName: "nina",
  },
];

describe("Tests for client", () => {
  it("Should render a user", async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeUser),
      })
    );

    await act(async () => {
      //const setLoadQuestion = jest.fn();

      render(<App />, container);
    });

    expect(container.querySelector("#usr").textContent).toContain(
      fakeUser[0].firstName
    );

    global.fetch.mockRestore();
  });
});
