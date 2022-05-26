import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Quiz from './components/Quiz/Quiz';
import QuizQuestion from './components/QuizQuestion/quizQuestion';
import QuizEnd from './components/QuizEnd/quizEnd';

const TOTAL_QUESTIONS = 20;

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizOver, setQuizOver] = useState(true)


  const [allData, setAllData] = useState<string[]>([]);
  const quesAnsData = (resData: any) => {
       setAllData(resData)
  }

  const [ansData, setAnsData] = useState<string[]>([])
  const getAllAns = (resData: any) => {
       setAnsData(resData)
  }

  console.log(ansData, "nasas")
  const startQuiz = async() => {
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }


  return (
    <div className="App">
      <QuizEnd/>
      <Quiz sendData={quesAnsData}/>
      <QuizQuestion receiveQuesData={allData}/>
    </div>
  );
}

export default App;
