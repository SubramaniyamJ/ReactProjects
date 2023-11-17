import React, { useState } from 'react'

const GokuToggleMessage = () => {
    const [currentState, setState] = useState("Kaiokan");
    const [count, setCount] = useState(1);
    const handleClick = () => {
        setCount(count + 1);
        if(count === 4){
            setState("Super Saiyan")
        }else if(count === 8){
            setState("Kaioken");
            setCount(1);
        }
    }
  return (
    <div>
        <button onClick = {handleClick}>GokuTransformation</button>
        <h1>{currentState}</h1>
    </div>
  )
}
export default GokuToggleMessage;
