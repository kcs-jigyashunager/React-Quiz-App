import React from 'react';
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
    
    console.log(receiveData, "oooooo")
    const dispatch = useAppDispatch()
    const data = useAppSelector(state => state.quesAns.ans)
    var numb=0
    
    const emptyArr = () => {
        dispatch(clearData(""))
        numb = 0
    }

    for (var _i = 0; _i < data.length; _i++) {
        var num = data[_i];
        if (num ===  "true"){
        numb = numb+1
        }
    }


     return (
            <div className='endPage'>
                
            <Card className='card' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Score More</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">With Quiz</Card.Subtitle>
                 Your live score is:- {numb}
            <Link to="/"><button onClick={() => emptyArr()}>Play Again</button></Link> 
            </Card.Body>
            </Card>
            {/* <div>
            <table>

            {receiveData && receiveData.map((data:any, index:number)=>{
                    return (
                    <>
                            <tr>
                                <th>Question</th>
                            </tr>
                         
                            <tr>
                           
                                <td>{data.question}</td>
                      
                            </tr>
                    <p></p>
                                 
                    </>
                        )
                    })}
                                        </table>

            </div>
             */}
            </div>
        )
    }


export default QuizEnd;