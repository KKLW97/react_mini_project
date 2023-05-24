import { useEffect, useState } from "react";
import DadJoke from "../components/DadJoke";
import SavedJokeList from "../components/SavedJokesList";

const DadJokeContainer = () => {

    const [joke, setJoke] = useState({})
    const [savedJokes, setSavedJokes] = useState([])

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

    const handleClick = () => {
        fetchJoke();
    }

    const saveJoke = (joke) => {
        setSavedJokes([...savedJokes, joke])
    }

    return ( 
        <>
            <h2>hello from dad joke container</h2>
            {/* <pre>{JSON.stringify(joke, null, 2)}</pre> */}
            <DadJoke joke={joke} handleClick={handleClick} saveJoke={saveJoke}/>
            <SavedJokeList savedJokes={savedJokes}/>
    
                
        </>
     );
}
 
export default DadJokeContainer;