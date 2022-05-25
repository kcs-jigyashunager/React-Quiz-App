import React,{ useEffect, useState} from 'react';

type props = {
    sendQuesData: (arg: string) => void
}

let Quiz:React.FC<props> = ({ sendQuesData }) => {

    const [dataState, setDataState] = useState([] as any)

    const getData = () =>{
        fetch('data.json'
        ,{
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        }
        )
            .then(function(response){
            return response.json();
            })
            .then(function(myJson) {
            setDataState(myJson)
            });
        }
    
    useEffect(() => {
        getData()
    }, [])
    
  
  return (
    <div>
        <button onClick={() => sendQuesData(dataState)}>Start Quiz</button>
    </div>
  )
}

export default Quiz;