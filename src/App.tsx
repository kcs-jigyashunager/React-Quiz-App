import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Quiz from './components/Quiz/Quiz';
import QuizQuestion from './components/QuizQuestion/quizQuestion';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import QuizEnd from './components/QuizEnd/quizEnd';


function App() {


  const [allData, setAllData] = useState<string[]>([]);
  const quesAnsData = (resData: any) => {
       setAllData(resData)
  }

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Quiz sendData={quesAnsData}/>}/>
            <Route path='/quiz' element={<QuizQuestion receiveQuesData={allData}/>}/>
            <Route path='/quizEnded' element={<QuizEnd receiveData={allData}/>}/>
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
