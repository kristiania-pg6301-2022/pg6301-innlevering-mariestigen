import express from "express";
import { QuizApp } from "./quizApp.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(cookieParser("superSecret"));

app.use("/api", QuizApp);
app.use(express.static("../client/dist"));

const server = app.listen(process.env.PORT || 3000, () => {
  console.info(`Server running on http://localhost:${server.address().port}`);
});
