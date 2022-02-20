import React, { useState } from "react";
import { fetchJSON, postJSON } from "./http.jsx";
import { useLoader } from "./useLoader.jsx";

function ShowQuestion({ question, onReload }) {
  async function handleAnswer(answer) {
    const { id } = question;
    postJSON("/api/answer", { id, answer });
    onReload();
  }

  return (
    <div>
      <h2>{question.question}</h2>
      {Object.keys(question.answers).map((a) => (
        <div key={a}>
          <button onClick={() => handleAnswer(a)}>{question.answers[a]}</button>
        </div>
      ))}
    </div>
  );
}

function QuestionComponent({ reload }) {
  const [question, setQuestion] = useState();

  async function handleLoadQuestion() {
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
        <button onClick={handleLoadQuestion}>Load a new question</button>
      </div>
    );
  }

  return <ShowQuestion question={question} onReload={handleReload} />;
}

export function App() {
  const {
    data: score,
    loading,
    reload,
  } = useLoader(async () => fetchJSON("api/score"));

  return (
    <div>
      <h1>WELCOME TO KVISS!</h1>
      <QuestionComponent reload={reload} />
    </div>
  );
}
