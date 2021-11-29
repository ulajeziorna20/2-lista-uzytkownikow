import React, { useState } from "react";
import './UsersList.css';
import ListToDisplay from './ListToDisplay';


const UsersList = () => {

    const [name, setName] = useState('')
    const [userList, setUserList] = useState([])


    const enterNewUser = (e) => {
        setName(e.target.value)
    }


    const userListChange = () => {
        setUserList(userList => [...userList, { name: name, key: Date.now() }])
        setName('');
    }


    const deleteUser = (id) => {

        let filteredUsers = userList.filter((user) => {

            if (user.key !== id)
                return true
        })

        setUserList(filteredUsers)
    }


    return (
        <div>
            <h1>User's List</h1>
            <div>
                <span>
                    <input type="text" name="name" id="enter-name" placeholder="Enter name" onChange={enterNewUser} value={name} />
                </span>
                <button onClick={userListChange}>Add User</button>
            </div>
            <ListToDisplay userList={userList} deleteUserMth={deleteUser} />
        </div>
    )
}


export default UsersList;