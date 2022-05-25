import React from 'react';

type props = {
    receiveQuesData: string[];
}

let QuizQuestion:React.FC<props> = ({receiveQuesData}) => {

    const arrSizeReducer = (arr: any) => [...arr].sort(() => 0.5 - Math.random()).slice(0, 20);

    const newList = arrSizeReducer(receiveQuesData);


  return (
    <>
    {newList && newList.map((data)=>{
        return (
        <div className='card-position'>
            <div className="card border-success mb-3" style={{"maxWidth": "30rem"}}>
                <div className="card-header bg-transparent border-success">Questions</div>
                    <div className="card-body text-success">
                        <h5 className="card-title">Hello</h5>
                        <p className="card-text">{data.question}</p>
                     </div>
                </div>
            </div>
       
      )
  })}
  </>
  )
}

export default QuizQuestion;