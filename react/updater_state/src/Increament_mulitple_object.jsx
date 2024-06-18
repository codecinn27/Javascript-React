import { useState } from "react";

export default function Increament_multiple_object(){
    const [score, setScore] = useState({p1Score: 0, p2Score: 0})
    const increaP1 =() => {
        setScore((oldScore) =>{
            return{...oldScore, p1Score:oldScore.p1Score+1}
        });
    }

    const increaP2 = () => {
        setScore((oldScore) =>{
            return {...oldScore, p2Score : oldScore.p2Score+1}
        });
    }
    return(
        <div>
            <h1>ScoreKeeper</h1>
            <p>Player 1: {score.p1Score}</p>
            <p>Player 2: {score.p2Score}</p>
            <button onClick={increaP1}>+1 Player 1</button>
            <button onClick={increaP2}>+1 Player 2</button>
        </div>
    )
}