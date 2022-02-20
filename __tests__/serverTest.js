import express from "../server/node_modules/express/index.js";
import bodyParser from "../server/node_modules/body-parser/index.js";
import cookieParser from "../server/node_modules/cookie-parser/index.js";
import request from "supertest";
import {QuizApp} from "../server/quizApp.js";

const app = express();
app.use(bodyParser.json());
app.use("/api", QuizApp);

describe("Tests for questions", () => {
   it("Should return a random question", async () => {
      const response = await request(app).get("/api/question").expect(200);
      expect(response.body).toMatchObject({
         id: expect.any(Number),
         answers: expect.any(Object),
         question: expect.any(String)
      })
   });
});

describe("Tests for answers", () => {

});

/*
*
* {
        "id": 974,
        "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
        "description": null,
        "answers": {
            "answer_a": "#demo.innerHTML = \"Hello World!\";",
            "answer_b": "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
            "answer_c": "document.getElement(\"p\").innerHTML = \"Hello World!\";",
            "answer_d": "document.getElementByName(\"p\").innerHTML = \"Hello World!\";",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "explanation": null,
        "tip": null,
        "tags": [{"name": "JavaScript"}],
        "category": "Code",
        "difficulty": "Easy"
    }
* */