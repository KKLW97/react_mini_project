import './SavedJokesList.css'
import SavedJoke from "./SavedJoke";

const SavedJokeList = ({savedJokes, deleteJoke}) => {

    const listOfSavedJokes = savedJokes.map((joke, index) => <SavedJoke joke={joke} key={index} deleteJoke={deleteJoke} />)

    return ( 
        <div>            
            <h2 className='saved'>Saved Jokes:</h2>
        <div className='saved-jokes-list'>
            <ul className='list-jokes'>
                {listOfSavedJokes}
            </ul>
        </div>
        </div>
     );
}
 
export default SavedJokeList;