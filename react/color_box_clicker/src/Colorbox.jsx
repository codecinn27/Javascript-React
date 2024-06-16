import {useState} from "react";
import "./Colorbox.css";

function randomChoice(arr){
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function Colorbox({colors}){
    const [color, setColor] = useState(randomChoice(colors));
    const changeColor = () =>{
        const randomColor = randomChoice(colors);
        setColor(randomColor);
    };

    const colored = { backgroundColor: color }; // Use backgroundColor instead of color
    return(
        <>
            <div className="colorbox" style={ colored } onClick={ changeColor }></div>
        </>
    )
}

export default Colorbox;