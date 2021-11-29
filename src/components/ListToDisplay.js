import React from "react";
import './ListToDisplay.css';



const ListToDisplay = (props) => {


    let listToDisplayJSX = props.userList.map((user) => {

        // console.log(user);

        return (
            <div key={user.key}>
                {user.name}<span onClick={() => props.deleteUserMth(user.key)}>X</span>
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

