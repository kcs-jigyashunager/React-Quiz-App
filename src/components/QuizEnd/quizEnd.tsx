import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "./style.css";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { clearData } from '../../redux/quesAnsReducer/quesAns';

type props = {
    receiveData: string[];
}

let QuizEnd:React.FC<props> = ({receiveData}) => {
    
    const dispatch = useAppDispatch()

    const reduxData = useAppSelector(state => state.quesAns.ans)
    var numb=0
    
    const emptyArr = () => {
        dispatch(clearData(""))
        numb = 0
    }

    const loop = () => {
        for (var _i = 0; _i < reduxData.length; _i++) {
        var num = reduxData[_i];
        if (num ===  "True"){
        numb = numb+1
        }
    }}

    loop()

     return (
            <div className='endPage'>
                
            <Card className='card' style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>Score More</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">With Quiz</Card.Subtitle>
                <p className='para'> Your live score is:- {numb} </p>
            <Link to="/"><button onClick={() => emptyArr()}>Play Again</button></Link> 
            </Card.Body>
            </Card>
            <div>
            <table>
                <tr>
                    <th>Question</th>                    
                    <th>Correct Answers</th>
                    <th>User Answers</th>
                </tr>
            {receiveData && receiveData.map((data:any, index:number)=>{
                    return (
                    <>                      
                        <tr> 
                            <td>{data.question}</td>
                            <td>{data.correct_answer} </td>
                            <td>{reduxData[index]}</td>              
                        </tr>                                
                    </>
                        )
                    })}
              
                
            </table>
            <h2>Thank You!</h2>
            </div>
            
            </div>
        )
    }


export default QuizEnd;