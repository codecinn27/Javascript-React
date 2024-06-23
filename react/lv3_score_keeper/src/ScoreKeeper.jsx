// import Player from "./Player";
// import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

export default function ScoreKeeper({numPlayer=1} , {target=5} ){
    const [scores, setScores] = useState(new Array(numPlayer).fill(0));
    const [isWinner, setIsWinner] = useState(false);
    //version 1
    // const incrementScore = (idx) =>{
    //     setScores((prevScore)=>{
    //         return prevScore.map((score, i)=>{
    //             if(i === idx) {
    //                 return score + 1;
    //             }
    //             return score;
    //         });
    //     });
    // }

    const incrementScore = (idx) => {
        if (!isWinner) {
            const newScores = scores.map((score, i) => i === idx ? score + 1 : score);
            setScores(newScores);
            
            if (newScores[idx] >= target) {
                setIsWinner(true);
            }
        }
    };

    const decreamentScore = (idx)=>{
        if (!isWinner) {
            const newScores = scores.map((score, i) => {
                if(i === idx){
                    return score>0 ?score -1 : score;
                } 
                return score;
            });
            setScores(newScores);
        }
    }
    const reset =() =>{
        setScores(new Array(numPlayer).fill(0));
        setIsWinner(false);
    }

    return(
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score,idx)=>{
                    return( 
                    <li key={idx}>
                        Player {idx+1} : {score}
                        <button onClick={()=> incrementScore(idx)}>+1</button>
                        <button onClick={()=> decreamentScore(idx)}>-1</button>
                        {score >= target && "Winner"}
                    </li>
                    );
                })}
                <button onClick={reset}>Reset</button>
            </ul>
        </div>

    )
}