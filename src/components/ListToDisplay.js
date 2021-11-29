import React from "react";
import './ListToDisplay.css';



const ListToDisplay = (props) => {


    let listToDisplayJSX = props.userList.map((user) => {

        // console.log(user);

        return (
            <div>
                <p key={user.key} id="user-item">
                    {user.name}
                </p>
                <span id="x-button" onClick={() => props.deleteUserMth(user.key)}>X</span>
            </div>
        )
    })

    // console.log(listToDisplayJSX);

    return (
        <div>
            {listToDisplayJSX}
        </div>
    )
}

export default ListToDisplay;

