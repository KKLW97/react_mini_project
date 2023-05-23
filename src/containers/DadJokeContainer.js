import { useEffect, useState } from "react";

const DadJokeContainer = () => {

    const [joke, setJoke] = useState([])

    const fetchJoke = async () => {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
              Accept: "application/json"
            }
          })
        const jsonData = await response.json()
        console.log(jsonData);
        setJoke(jsonData)
    }

    useEffect(()=> {
        fetchJoke();
    }, [])
    return ( 
        <>
            <h1>hello from dad joke container</h1>
            
        </>
     );
}
 
export default DadJokeContainer;