import React, { useState } from "react";
import './UsersList.css';
import EnterNameInput from './EnterNameInput';
import ListToDisplay from './ListToDisplay';


const UsersList = () => {


    const [name, setName] = useState('')
    const [userList, setUserList] = useState([])

 


    const enterNewUser = (e) => {

        setName(e.target.value)
    }



    const userListChange = () => {

        let newUser = name

        setUserList(userList.push(newUser))
    }


    return (
        <div>
            <h1>User's List</h1>
            <EnterNameInput enterNewUserMth={enterNewUser}/>
            <button onClick={userListChange}>Add User</button>
            <ListToDisplay userListMth={userList}/>
        </div>
    )
}


export default UsersList;