import DadJoke from "./DadJoke";
import SavedJoke from "./SavedJoke";

const SavedJokeList = ({savedJokes, deleteJoke}) => {

    const listOfSavedJokes = savedJokes.map((joke, index) => <SavedJoke joke={joke} key={index} deleteJoke={deleteJoke} />)

    return ( 
        <>
            <h3>Saved Jokes:</h3>
            <ul>
                {listOfSavedJokes}
            </ul>
        </>
     );
}
 
export default SavedJokeList;