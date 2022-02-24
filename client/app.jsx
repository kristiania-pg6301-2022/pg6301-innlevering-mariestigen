import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchJSON, postJSON } from "./http.jsx";
import { useLoader } from "./useLoader.jsx";

export function ShowQuestion({ question, onReload }) {
  async function handleAnswer(answer) {
    const { id } = question;
    postJSON("/api/answer", { id, answer });
    onReload();
  }

  return (
    <div>
      <h2 id={"question-header"}>{question.question}</h2>
      {Object.keys(question.answers).map((a) => (
        <div key={a}>
          <button onClick={() => handleAnswer(a)}>{question.answers[a]}</button>
        </div>
      ))}
    </div>
  );
}

export function QuestionComponent({ reload }) {
  const [question, setQuestion] = useState();

  async function handleLoadQuestion() {
    console.log("click!");
    const res = await fetch("api/question");
    setQuestion(await res.json());
  }

  function handleReload() {
    setQuestion(undefined);
    reload();
  }

  if (!question) {
    return (
      <div>
        <button id="load-question-btn" onClick={handleLoadQuestion}>
          Load a new question
        </button>
      </div>
    );
  }

  return <ShowQuestion question={question} onReload={handleReload} />;
}

function MainPage(props) {
  return (
    <div>
      <Score />
      <h1>WELCOME TO KVISS!</h1>
      <QuestionComponent reload={props.reload} />
    </div>
  );
}

function CorrectPage(props) {
  return (
    <>
      <Score />
      <h1>Correct answer!</h1>
    </>
  );
}

function WrongPage(props) {
  return (
    <>
      <Score />
      <h1>Wrong answer!</h1>
    </>
  );
}

function Score() {
  return (
    <div>
      <p>Correct:</p>
      <p>Total:</p>
    </div>
  );
}

export function App() {
  const {
    data: score,
    loading,
    reload,
  } = useLoader(async () => fetchJSON("api/score"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage reload={reload} />} />
        <Route path={"/correct"} element={<CorrectPage reload={reload} />} />
        <Route path={"/wrong"} element={<WrongPage reload={reload} />} />
        <Route path={"/*"} element={<h1>not found!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
