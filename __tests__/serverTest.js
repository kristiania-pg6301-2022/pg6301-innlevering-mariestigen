import express from "../server/node_modules/express/index.js";
import bodyParser from "../server/node_modules/body-parser/index.js";
import cookieParser from "../server/node_modules/cookie-parser/index.js";
import request from "supertest";
import {QuizApp} from "../server/quizApp.js";

const app = express();
app.use("/api", QuizApp);

describe("Tests for questions", () => {
   it("Should return a random question", async () => {
      const response = await request(app).get("/api/question").expect(200);
      expect(response.body).toMatchObject({
         id: expect.any(Number),
         answers: expect.any(Object),
         question: expect.any(String)
      })
   }) ;
});

describe("Tests for answers", () => {

});