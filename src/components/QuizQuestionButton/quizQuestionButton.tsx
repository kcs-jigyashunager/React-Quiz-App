import React, { useState } from 'react';
import "./style.css";
import { useAppDispatch } from "../../redux/hooks";
import { saveData } from "../../redux/quesAnsReducer/quesAns";


type props = {
    receiveAnsData: string;
    getIndex: number;
    sendIndex: (arg: string[]) => void;
    sendRightAns: string;
}

let QuizQuestionButton:React.FC<props> = ({receiveAnsData, getIndex, sendIndex, sendRightAns}) => {

  const [ansIndex, setAnsindex] = useState<any>();
  const dispatch = useAppDispatch()

  
  const increaseIndex = (index:number) => {
    setAnsindex(getIndex+1)
    sendIndex(ansIndex)
  }

  const font = "false"
  const font2 = "true"

  const getWrongAns = (ans:string) => {
      if(sendRightAns === ans){
          //run function 1
          dispatch(saveData(font2))
        } else {
          //run function 2
          dispatch(saveData(font))
         }
      } 
      

  return (
    <>
    <div className='buttons'>
      <button onClick={() => { increaseIndex(getIndex); getWrongAns(receiveAnsData); }}>{receiveAnsData}</button>
    </div>
  </>
  )
}

export default QuizQuestionButton;