import React, { useState } from 'react';
import QuizQuestionButton from '../QuizQuestionButton/quizQuestionButton';

type props = {
    receiveQuesData: string[];
}

let QuizQuestion:React.FC<props> = ({receiveQuesData}) => {

    const [quesIndex, setQuesindex] = useState<number>(1);
  
    const increaseIndex = () => {
        setQuesindex(quesIndex+1)
    }

    const showQuizInfo = () => {
        return (
            <div>
                {receiveQuesData && receiveQuesData.map((data:any, index:number)=>{
                    return (
                    <div className='card-position'>
                        <div className="card border-success mb-3" style={{"maxWidth": "30rem"}}>
                            <div className="card-header bg-transparent border-success">Questions</div>
                                { index+1 === quesIndex &&
                                    
                                    <div className="card-body text-success" key={data.id}>
                                    <h5 className="card-title">Hello</h5>                                    
                                    <p className="card-text">{data.question}</p>
                                    {
                                        data.answers.map((ans:any) => {
                                        return (
                                            <>
                                        <QuizQuestionButton receiveAnsData={ans} getIndex={quesIndex} sendIndex={increaseIndex}/>
                                        </>
                                        )
                                        
                                        })
                                    }
                                </div>}
                            </div>
                        </div>
                        )
                    })}
            </div>
        )
    }

  return (
    <>
    {showQuizInfo()}
    <button onClick={increaseIndex}>NEXT</button>
  </>
  )
}

export default QuizQuestion;