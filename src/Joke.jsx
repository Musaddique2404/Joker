import { useEffect, useState } from "react";

export default function Jokes(){

    let [joke,setjoke] = useState({});

    const URL =  "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke= async ()=>{
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setjoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    };
    
    useEffect(() => { async function getFirstJoke(){
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse); 
        setjoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJoke();    
},[]);

   

    
    return(
        <div>
            <h1>Joker!</h1>
            <h2> {joke.setup}</h2>
            <h3> {joke.punchline}</h3>
            <button onClick={getNewJoke}>New joke</button>
        </div>
    )
}