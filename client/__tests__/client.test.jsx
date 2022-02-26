import { App, QuestionComponent, ShowQuestion } from "../app.jsx";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";

let container = null;
const fakeQuestion = {
  id: 974,
  question:
    "What is the correct JavaScript syntax to change the content of the HTML element below?",
  answers: {
    answer_a: '#demo.innerHTML = "Hello World!";',
    answer_b: 'document.getElementById("demo").innerHTML = "Hello World!";',
    answer_c: 'document.getElement("p").innerHTML = "Hello World!";',
    answer_d: 'document.getElementByName("p").innerHTML = "Hello World!";',
  },
};

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

describe("Tests for client", () => {
  it("Should render a question", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeQuestion),
      })
    );
    await act(async () => {
      render(<App />, container);
      Simulate.click(container.querySelector("button"));
    });
    const header = container.querySelector("h2");
    expect(header.textContent).toBe(fakeQuestion.question);
    global.fetch.mockRestore();
  });
});
