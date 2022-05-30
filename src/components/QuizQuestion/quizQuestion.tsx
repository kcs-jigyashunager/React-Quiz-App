import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import "./style.css";
import QuizQuestionButton from '../QuizQuestionButton/quizQuestionButton';

type props = {
    receiveQuesData: string[];
}

let QuizQuestion:React.FC<props> = ({receiveQuesData}) => {

    console.log(receiveQuesData)
    const [quesIndex, setQuesindex] = useState<number>(1);

    const increaseIndex = () => {
        setQuesindex(quesIndex+1)
        setSeconds(20)
    }
    const [seconds, setSeconds] = useState<number>(20);

    useEffect(() => { { 
      const interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }}, [seconds]);
  
    if(seconds < 0) {
      setSeconds(20)
      increaseIndex()
    }

    const showQuizInfo = () => { if( quesIndex <= 20) {
        return (
            <div className='container'>
                <div className='card-position'>
                        <div className="card border-success mb-3" style={{"minWidth": "40rem", "maxWidth": "40rem", "maxHeight":"50rem"}}>
                            <div className="card-header bg-transparent border-success" style={{"fontSize": "25px"}}>Questions</div>
                            <button className='secButton'> TIMER: {seconds}sec </button>
                {receiveQuesData && receiveQuesData.map((data:any, index:number)=>{
                    return (
                    <>
                                { index+1 === quesIndex &&
                                    
                                    <div className="card-body text-success" key={data.id}>
                                    <h5 className="card-title" style={{"fontSize": "25px"}}> Q. {index+1}</h5>                                    
                                    <p className="card-text" style={{"fontSize": "25px"}}>{data.question}</p>
                                    {
                                        data.answers.map((ans:any) => {
                                        return (
                                            <>
                                        <QuizQuestionButton receiveAnsData={ans} getIndex={quesIndex} sendIndex={increaseIndex} sendRightAns={data.correct_answer}/>
                                        </>
                                        )
                                        
                                        })
                                    }
                                </div>}
                            </>
                        )
                    })}
                    </div>
                        </div>
            </div>
        )}
    }

    if(quesIndex >= 21){
        return <Navigate to="/quizEnded"/>
        }
    

  return (
    <>
    {showQuizInfo()}
  </>
  )
}

export default QuizQuestion;