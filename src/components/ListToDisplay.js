import React from "react";
import './ListToDisplay.css';



const ListToDisplay = (props) => {

    let listToDisplayJSX = props.userList.map((user) => {

        return (
            <div className="user-element">
                <div key={user.key} id="user-item">
                    {user.name}
                </div>
                <span id="x-button" onClick={() => props.deleteUserMth(user.key)}>X</span>
            </div>
        )
    })


    return (
        <div>
            {listToDisplayJSX}
        </div>
    )
}

export default ListToDisplay;

