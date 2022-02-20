import express from "express";
import { QuizApp } from "./quizApp.js";

const app = express();
app.use("/api", QuizApp);

const server = app.listen(process.env.PORT || 3000, () => {
    console.info(`Server running on http://localhost:${server.address().port}`);
})