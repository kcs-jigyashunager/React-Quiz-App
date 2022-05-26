import React,{ useEffect, useState} from 'react';
import axios from "axios";

type props = {
    sendData: (arg: string[]) => void
}

let Quiz:React.FC<props> = ({ sendData }) => {

    const [dataState, setDataState] = useState([] as string[])

    const getData = async() => {
        const { data } = await axios.get('./data.json')
        
        const formattedData = data.map((category:any) => {
            const incorrectAnswersIndexes = category.incorrect_answers.length;
            const randomIndex = Math.random() * (incorrectAnswersIndexes - 0) + 0;
            category.incorrect_answers.splice(
                randomIndex,
                0, 
                category.correct_answer
                )

            return {
                ...category,
                answers: category.incorrect_answers
            }
        });

        setDataState(formattedData);  
      };
    
    useEffect(() => {
        getData()
    }, []);    
  
    const arrSizeReducer = (arr: any) => [...arr].sort(() => 0.5 - Math.random()).slice(0, 20);

    const newList = arrSizeReducer(dataState);
    
  return (
    <div>
        <button onClick={() => sendData(newList)}>Start Quiz</button>
    </div>
  )
}

export default Quiz;