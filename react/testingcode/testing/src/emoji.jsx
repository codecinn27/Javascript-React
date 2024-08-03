import { useState } from "react"

export default function emoji(){
    const [happy, setHappy] = useState("😊");
    const invertEmoji = () => {
        setHappy(happy === "😊" ? "😭" : "😊");
      };

    return(
        <>
            <span onClick={invertEmoji} style={{fontSize : "3rem", cursor: "pointer" }}>{happy}</span>
        </>
    )
}