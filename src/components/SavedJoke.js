const SavedJoke = ({joke, deleteJoke}) => {

    return ( 
         <div className="dad-joke">
            <h4>{joke.joke}</h4>
            <button onClick={() => deleteJoke(joke)}>Delete joke</button>
        </div>
    
     );
}
 
export default SavedJoke;