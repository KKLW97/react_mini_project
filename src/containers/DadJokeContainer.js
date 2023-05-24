import { useEffect, useState } from "react";
import DadJoke from "../components/DadJoke";
import NewsletterForm from "../components/NewsletterForm";
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

    const deleteJoke = (jokeToDelete) => {
        const newList = savedJokes.filter(joke => joke.id !== jokeToDelete.id)
        setSavedJokes(newList)
    }

    return ( 
        <>
            <h2>Your Daily Dad Joke:</h2>
            {/* <pre>{JSON.stringify(joke, null, 2)}</pre> */}
            <DadJoke joke={joke} handleClick={handleClick} saveJoke={saveJoke}/>
            <div className="list-form-container">
                <SavedJokeList savedJokes={savedJokes} deleteJoke={deleteJoke}/>
                <NewsletterForm/>
            </div>
                
        </>
     );
}
 
export default DadJokeContainer;