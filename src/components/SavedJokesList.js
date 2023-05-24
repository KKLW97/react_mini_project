import DadJoke from "./DadJoke";

const SavedJokeList = ({savedJokes}) => {

    const listOfSavedJokes = savedJokes.map((joke) => <DadJoke joke={joke} />)

    return ( 
        <>
            <h3>hello from saved joke list</h3>
            <ul>
                {listOfSavedJokes}
            </ul>
        </>
     );
}
 
export default SavedJokeList;