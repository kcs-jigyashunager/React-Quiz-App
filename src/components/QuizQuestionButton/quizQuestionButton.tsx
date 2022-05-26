import React, { useState } from 'react';

type props = {
    receiveAnsData: string[];
    getIndex: number;
    sendIndex: (arg: string[]) => void;
}

let QuizQuestionButton:React.FC<props> = ({receiveAnsData, getIndex, sendIndex}) => {

  const [ansIndex, setAnsindex] = useState<any>();

  const increaseIndex = (index:number) => {
    setAnsindex(getIndex+1)
    sendIndex(ansIndex)
  }

  return (
    <>
    <div>
      <button onClick={() => increaseIndex(getIndex)}>{receiveAnsData}</button>
    </div>
  </>
  )
}

export default QuizQuestionButton;