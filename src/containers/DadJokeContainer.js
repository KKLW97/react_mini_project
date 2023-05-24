import { useEffect, useState } from "react";
import DadJoke from "../components/DadJoke";

const DadJokeContainer = () => {

    const [joke, setJoke] = useState({})

    const fetchJoke = async () => {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
              Accept: "application/json"
            }
          })
        const jsonData = await response.json()
        setJoke(jsonData)
    }

    useEffect(()=> {
        fetchJoke();
    }, [])

    return ( 
        <>
            <h2>hello from dad joke container</h2>
            {/* <pre>{JSON.stringify(joke, null, 2)}</pre> */}
            <DadJoke joke={joke}/>
                
        </>
     );
}
 
export default DadJokeContainer;