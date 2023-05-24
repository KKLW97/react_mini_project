const SavedJoke = ({joke, deleteJoke}) => {

    return ( 
         <div className="dad-joke">
            <h3>{joke.joke}</h3>
            <button onClick={() => deleteJoke(joke)}>Delete joke</button>
        </div>
    
     );
}
 
export default SavedJoke;