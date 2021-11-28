import React, { useState } from "react";
import './UsersList.css';
import EnterNameInput from './EnterNameInput';
import ListToDisplay from './ListToDisplay';


const UsersList = () => {


    const [name, setName] = useState('')
 


    const enterNewUser = (e) => {

        setName(e.target.value)
    }


    return (
        <div>
            <h1>User's List</h1>
            <EnterNameInput enterNewUserMth={enterNewUser}/>
            <button>Add User</button>
            <ListToDisplay />
        </div>
    )
}


export default UsersList;