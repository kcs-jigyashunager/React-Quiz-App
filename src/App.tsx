import React, { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import QuizQues from './components/QuizQues/quizQues';
import QuestionCard from './components/QuestionCard/questionCard';
import { fetchQuizQues } from './components/DataHandling/dataHandling';

const TOTAL_QUESTIONS = 20;

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizOver, setQuizOver] = useState(true)

  console.log(fetchQuizQues(), "hooo")


  const startQuiz = async() => {
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  const [dataState, setDataState] = useState([])

  const getData=()=>{
      fetch('data.json'
      ,{
          headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          }
      }
      )
          .then(function(response){
          return response.json();
          })
          .then(function(myJson) {
          setDataState(myJson)
          });
      }
  
  return (
    <div className="App">
      <h1> React + TypeScript Quiz</h1>
      <Button onClick={startQuiz}>Start</Button>
      <p className='score'>Score:</p>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number]: undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
      <QuizQues questions={dataState}/>
    
    </div>
  );
}

export default App;
