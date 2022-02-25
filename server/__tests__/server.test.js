import express, { response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import request from "supertest";
import { QuizApp } from "../quizApp.js";

const app = express();
app.use(bodyParser.json());
app.use(cookieParser("superSecret"));
app.use("/api", QuizApp);

describe("Tests for questions", () => {
  it("Should return a random question", async () => {
    const response = await request(app).get("/api/question").expect(200);
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      answers: expect.any(Object),
      question: expect.any(String),
    });
  });
});

describe("Tests for answers", () => {
  it("Should return correct or incorrect for answer", async () => {
    const agent = request.agent(app);

    const res = await agent
      .post("/api/answer")
      .send({ id: 974, answer: "answer_b" })
      .expect({ result: "correct" });
  });

  it("Should keep track of score", async () => {
    const agent = request.agent(app);
    await agent.post("/api/answer").send({ id: 974, answer: "answer_b" });
    await agent.get("/api/score").expect(200).expect({ score: 1, answers: 1 });
  });
});
