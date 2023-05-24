import './NewsletterForm.css'

const NewsletterForm = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return ( 
        <div>                
            <h2>Signup For Daily Laughs!</h2>
            <form>
                <input 
                    type="text"
                    name="name"
                    placeholder="Enter your name"/>
                <input 
                    type="text"
                    name="email"
                    placeholder="Enter your email address"/>
                <button type="submit" onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
     );
}
 
export default NewsletterForm;