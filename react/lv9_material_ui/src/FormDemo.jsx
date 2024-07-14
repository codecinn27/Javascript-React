import { useState } from "react";
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

export default function FormDemo(){
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [code, setCode] = useState("BERN1723");
    const [uni, setUni] = useState("Utem");
    const [volume, setVolume] = useState(10);

    const updateName = (e) =>{
        setName(e.target.value);
    }

    const updateAge = (e) =>{
        setAge(e.target.value);
    }

    const updateCode = (e) =>{
        setCode(e.target.value);
    }

    const updateUni = (e) =>{
        setUni(e.target.value);
    }

    const slideVolume = (e, newVal) =>{
        setVolume(newVal);
    }

    return(
        <Box sx={{ border: "1px solid red", p:4 ,'&:hover': {bgcolor: '#b2a300'}}}>
            <h1>Name: {name} || Age: {age} </h1>
            <TextField id="1" label="Name" placeholder="Username" variant="filled" value={name}  onChange={updateName}/>
            <TextField id="3" label="Age" placeholder="eg. 18" variant="filled" value={age}  onChange={updateAge} />
            <br/>
            <h2>Code : {code}  || University: {uni}</h2>
            <TextField id="5" label="Code" variant="standard" value={code}  onChange={updateCode}/>
            <TextField id="6" label="University" placeholder="eg. Utem" variant="standard" value={uni}  onChange={updateUni} />
            <br />
            <h3>Volume : {volume}</h3>
            <Slider aria-label="Volume" value={volume} onChange={slideVolume} />
        </Box>
    )
}