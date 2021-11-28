import React, { useState } from "react";
import './UsersList.css';
import EnterNameInput from './EnterNameInput';
import ListToDisplay from './ListToDisplay';


const UsersList = () => {





    return (
        <div>
            <h1>User's List</h1>
            <EnterNameInput />
            <button>Add User</button>
            <ListToDisplay />
        </div>
    )
}


export default UsersList;