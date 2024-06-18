import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function EmojiClicker(){
    const [emojis, setEmojis] = useState([{id: uuidv4(), emoji:"😂"}]);
    const addEmoji = () =>{
        setEmojis((oldEmojis) => [...oldEmojis,{id: uuidv4(), emoji: "😭"} ]);
    }
    return(
        <>  
            {emojis.map((e)=>(
                <span key={e.id} style={{fontSize: "4rem"}}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </>
    )
}