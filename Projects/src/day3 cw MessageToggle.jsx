import React, { useState } from "react";

const ToggleMessage = () => {

    const [bool, setBool] = useState(false);
    const [buttonText, setButtonText] = useState("Show Message");

    const handleClick = () => {
        bool ? setButtonText("Show Message") : setButtonText("Hide Message");
        setBool(!bool);
    }

    return(
        <div> 
            <button onClick = {handleClick}>{buttonText}</button>
            {bool ? <p>Hi! How are you!</p> : null}
        </div>
           
    );
}
export default ToggleMessage;