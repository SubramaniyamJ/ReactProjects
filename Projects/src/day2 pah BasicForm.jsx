import React from 'react';
import { useState } from 'react';

const BasicForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    

    
    const getElement = (event) => {
        event.preventDefault();
        console.log(name);
        console.log(email);
        console.log(message);
    }
    return(
        <form onSubmit={getElement}>
                    
            <label>Name : <input id = "name" type = "text" onChange = {(event) => setName(event.target.value)}></input></label><br></br><br></br>
            
            <label>Email Address : <input id = "email" type = "email" onChange = {(event) => setEmail(event.target.value)}></input></label><br></br><br></br>

            <label>Leave Your Message Here :  <br></br><br></br><textarea id = "message" cols = "40" rows = "5" onChange = {(event) => setMessage(event.target.value)}></textarea></label>
            
            <br></br><br></br>
            <button>Submit</button>
        </form>
    );
}

export default BasicForm;