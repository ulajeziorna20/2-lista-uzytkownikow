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

        setUserList(userList => [...userList, {name: name}])
    }



    const deleteUser = (e) => {

        console.log(e);
        console.log(e.target.id);
        console.log(e.target.name);
    // let filterUser = userList.filter((user) => {
        
    //     if (user.id !== ) {

    //     }
    // })

    }


    return (
        <div>
            <h1>User's List</h1>
            <EnterNameInput enterNewUserMth={enterNewUser}/>
            <button onClick={userListChange}>Add User</button>
            <ListToDisplay userListMth={userList} deleteUserMth={deleteUser}/>
        </div>
    )
}


export default UsersList;