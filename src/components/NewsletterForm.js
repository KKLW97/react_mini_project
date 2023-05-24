import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import { useState } from 'react';
import './NewsletterForm.css'

const NewsletterForm = () => {
    const [checked, setChecked] = useState(false)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState ("");
    const [success, setSuccess] = useState("");

    const whenChecked = () => {
        setChecked((prev)=> !prev)
    };

    const handleValidation = () => {
        let errorMessage = "";
    
        // if(name === "" || email === ""){
        //   errorMessage = "Please fill in all the fields";
        // };

        if(!checked){
            errorMessage = "Please accept the terms & conditions"
        }
    
        setError(errorMessage);
    
        return errorMessage ;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let successMessage = "Successfully subscribed!"
        console.log(handleValidation())
        if(!handleValidation()){
            return setSuccess(successMessage) 
        }
    }

    return ( 
        <div>                
            <h2>Signup For Daily Laughs!</h2>
            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder="Enter your name"/>
                <input 
                    type="text"
                    name="email"
                    placeholder="Enter your email address"/>
                <label htmlFor="tAndC">Accept terms & conditions<input type='checkbox' id="tAndC" name="checkbox" value={!checked} onChange={() => {console.log(checked); whenChecked();}}/></label>
                <button type="submit" >Submit</button>
            </form>
            <p>{error}</p>
            <p>{success}</p>
        </div>
     );
}
export default NewsletterForm;