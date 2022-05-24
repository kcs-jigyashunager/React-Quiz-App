import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNr: number;
    totalQuestions: number;
}

let QuestionCard:React.FC<Props> = ({ 
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNr, 
    totalQuestions}) => {


  return (
    <div>
        <div className='card-position'>
            <div className="card border-success mb-3" style={{"maxWidth": "30rem"}}>
            <div className="card-header bg-transparent border-success">Questions</div>
            <div className="card-body text-success">
                <h5 className="card-title">Question: {questionNr} / {totalQuestions} </h5>
                <p className="card-text" dangerouslySetInnerHTML={{ __html: question }}/>
            <div>
                {answers.map(answer => (
                    <div>
                        <button disabled={userAnswer} onClick={callback} type="button" className="btn btn-dark">
                            <span dangerouslySetInnerHTML={{ __html: answer}} />
                        </button>
                    </div>
                ))}    
            </div>
            </div>
                <div className="card-footer bg-transparent border-success">Answer</div>
            </div>
        </div>
    </div>
  )
}

export default QuestionCard;