import React,{ useEffect, useState} from 'react';
import axios from "axios";
import "./style.css";
import { Link } from 'react-router-dom';

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
      
  
    const arrSizeReducer = (arr: any) => [...arr].sort(() => 0.5 - Math.random()).slice(0, 20);

    const newList = arrSizeReducer(dataState);
    

    useEffect(() => {
        getData()
    }, []);  

   


  return (
    <div className="startPage">
        <h1>Welcome New User <br/> Start Your Quiz</h1>
        <Link to="/quiz"><button onClick={() => {sendData(newList)}}>Start Quiz</button></Link>
    </div>
  )
}

export default Quiz;