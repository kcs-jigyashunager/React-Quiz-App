import React from 'react';
import "./style.css";

// for props
interface IProps{
  questions: string[];
}

let QuizQues:React.FC<IProps> = ({questions}) => {

  const shuffle = (arr:string[]) => [...arr].sort(() => 0.5 - Math.random()).slice(0, 20);

  const newList = shuffle(questions);




  return (
    <div className='card-position'>
        <div className="card border-success mb-3" style={{"maxWidth": "30rem"}}>
        <div className="card-header bg-transparent border-success">Questions</div>
        <div className="card-body text-success">
            <h5 className="card-title">Ques.1</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
            <button type="button" className="btn btn-dark">Dark</button>
            <button type="button" className="btn btn-dark">Dark</button>
            <button type="button" className="btn btn-dark">Dark</button>
            <button type="button" className="btn btn-dark">Dark</button>
        </div>
            <div className="card-footer bg-transparent border-success">Answer</div>
        </div>
    </div>
  )
}

export default QuizQues;