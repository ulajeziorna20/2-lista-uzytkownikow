import React from "react";
import './ListToDisplay.css';



const ListToDisplay = (props) => {


    let listToDisplayJSX = props.userListMth.map((user, index) => {
       
        return <div key={Date.now() + index} name={user.name}>{user.name}<span onClick={props.deleteUserMth}>X</span></div>
    })

    return (
        <div>
            {listToDisplayJSX}
        </div>
    )
}

export default ListToDisplay;

