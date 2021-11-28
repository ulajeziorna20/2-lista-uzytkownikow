import React from "react";
import './EnterNameInput.css';



const EnterNameInput = (props) => {



    return (
        <span>
            <input type="text" name="name" id="enter-name" onChange={props.enterNewUserMth}/>
        </span>
    )
}

export default EnterNameInput;