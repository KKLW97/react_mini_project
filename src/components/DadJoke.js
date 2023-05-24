import './DadJoke.css'

const DadJoke = ({joke, handleClick, saveJoke}) => {
    return ( 
    
        <div className="dad-joke">
            <h3>{joke.joke}</h3>
            <button onClick={() => saveJoke(joke)}>Save joke</button>
            <button onClick={handleClick}>Generate new joke</button>
        </div>
     );
}
 
export default DadJoke;