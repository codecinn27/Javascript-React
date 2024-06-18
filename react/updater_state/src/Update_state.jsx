import { useState } from "react";
function Update_state(){
    const [count, setCount] = useState(0);
    const addOne = () =>{
        setCount(currentCount => currentCount +1);
    }
    const addThree = ()=>{
        setCount(currentCount => currentCount +1);
        setCount(currentCount => currentCount +1);
        setCount(currentCount => currentCount +1);
    }
    return(
        <>
          <h2>{count}</h2>
          <button onClick={addOne}>+1</button>
          <button onClick={addThree}>+3</button>
        </>
    )
}

export default Update_state;