import React from "react";

const AppCss = () => {
    return(
        <div style = {{backgroundColor : "lightblue", padding : "10 px" , border : "1px solid blue" , borderRadius : "5px"}}>
            <h1 style = {{color : "green"}}>InLine Style in CSS Example</h1>
            <p style = {{color : "darkblue" , fontSize : "16px"}}>This the Paragraph text with InLine styles applied.</p>
        </div>
    );
}

export default AppCss;