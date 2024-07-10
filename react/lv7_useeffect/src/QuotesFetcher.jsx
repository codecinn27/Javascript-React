//const random_quotes_url = "https://api.api-ninjas.com/v1/quotes?category=learning";
const random_quotes_url = "https://inspo-quotes-api.herokuapp.com/quotes/random";
import { useState, useEffect } from "react";

export default function QuoteFetcher(){
    //inside useState cannot use async function
    const [quote, setQuote] = useState({text: "", author: ""});

    //instead of using useState we use useEffect to call the first render after refreshing the page
    useEffect(() =>{
        fetchQuote();
    },[]);

    async function fetchQuote(){
        const response = await fetch(random_quotes_url);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote);
    }

    return(
        <div>
            <button onClick={fetchQuote}> Get Quote Using handler</button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    )
}