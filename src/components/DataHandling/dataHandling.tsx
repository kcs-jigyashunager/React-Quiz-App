import { shuffleArray } from "../Utils/utils";

export type Question = {
  category: string;
  correctAnswer: string;
  difficulty: string;
  incorrectAnswers: string[];
  question: string;
  type: string;
}

export type QuestionState = Question & { answers: string[] }

export const fetchQuizQues = async() => {
    const data = await (await fetch('data.json')).json();
    return data.results.map((question: Question) => (
      {
        ...question, 
        answer: shuffleArray(
          [...question.incorrectAnswers,
             question.correctAnswer
        ])
      }
    ))
  };