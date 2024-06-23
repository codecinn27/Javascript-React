import { useState } from 'react';

export default function Player({num, target, score=0}){
    const [score1, setScore1] = useState(score);
    const add_score =()=>{
        setScore1((prevScore)=> prevScore+1)
    }
    const dlt_score =()=>{
        setScore1((prevScore)=> prevScore-1)
    }
    return(
        <>
            <span>Player {num}: {score1}</span>
            <button onClick={add_score}>+1</button>
            <button onClick={dlt_score}>-1</button>
        </>
    )
}