import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function randomEmoji(){
    const choices = ["😍","😗","🤩","🥸","😎","🤓","🧐","😜","😚","😋","😘","🥰"]
    return choices[Math.floor(Math.random()* choices.length)];
}

export default function EmojiClicker(){
    const [emojis, setEmojis] = useState([{id: uuidv4(), emoji: randomEmoji()}]);
    const addEmoji = () =>{
        setEmojis((oldEmojis) => [...oldEmojis,{id: uuidv4(), emoji: randomEmoji()} ]);
    }
    const deleteEmoji = (id)=>{
        //console.log(id);
        //delete emoji with specify id
        setEmojis((prevEmojis)=>{
            return prevEmojis.filter((e)=>e.id !==id); //will filter out not related id
        })
    }

    const makeEverythingAHeart = ()=>{
        setEmojis((prevEmojis) => {
            return prevEmojis.map((e)=>{
                return{...e, emoji:"❤️"};
            })
        })
    }
    return(
        <>  
            {emojis.map((e)=>(
                <span  onClick={()=>deleteEmoji(e.id)} key={e.id} style={{fontSize: "4rem"}}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeEverythingAHeart}>Turn all Heart</button>
        </>
    )
}