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

function setupFetchStub(data) {
  return function fetchStub(_url) {
    return new Promise((resolve) => {
      resolve({
        json: () =>
          Promise.resolve({
            data,
          }),
      });
    });
  };
}
describe("Tests for client", () => {
  it("Should render a question", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(setupFetchStub(fakeQuestion));

    await act(async () => {
      //const setLoadQuestion = jest.fn();

      render(<App />, container);
    });

    Simulate.click(container.querySelector("#load-question-btn"));
    expect(container.querySelector("#question-container h2").textContent).toBe(
      fakeQuestion.question
    );

    global.fetch.mockRestore();
  });
});
