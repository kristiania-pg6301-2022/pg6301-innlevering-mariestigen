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

QuizApp.post("/answer", (req, res) => {
    const {id, answer} = req.body;
    const question = Questions.find((q) => q.id === id);

    if(!question){
        return res.sendStatus(404);
    }

    if(isCorrectAnswer(question, answer)){
        return res.json({result: "correct"});
    } else {
        return res.json({result: "incorrect"});
    }
});