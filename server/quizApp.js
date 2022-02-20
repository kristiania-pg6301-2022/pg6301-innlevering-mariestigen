import express from "express";
import { Questions, randomQuestion, isCorrectAnswer } from "./questions.js";

export const QuizApp = express.Router();

QuizApp.get("/question", (req, res) => {
    let { question, answers, id } = randomQuestion();
    answers = Object.keys(answers)
        .filter(a => answers[a] !== null)
        .reduce((obj, key) => {
            obj[key] = answers[key];
            return obj;
        }, {});

    res.json({question,answers,id});
});
