import { useState } from 'react'
import './DadJoke.css'

const DadJoke = ({joke, handleClick, saveJoke}) => {
    const [showButton, setShowButton] = useState(true);

    const toggleButton = () => {
        setShowButton(!showButton)
    }
    
    return ( 
    
        <div className="dad-joke">
            <h3>{joke.joke}</h3>
            <div className='buttons'>
                {showButton && 
                    <button onClick={() => {
                        saveJoke(joke);
                        toggleButton();
                    }}>Save joke</button>}
                <button onClick={ !showButton ? ()=> {handleClick(); toggleButton()}: handleClick}>Generate new joke</button>
                </div>
        </div>
     );
}
 
export default DadJoke;