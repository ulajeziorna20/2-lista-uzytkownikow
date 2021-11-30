import React from 'react'
import './ListToDisplay.css'

const ListToDisplay = (props) => {
	let listToDisplayJSX = props.userList.map((user) => {
		return (
			<div className="list-element" key={user.key}>
				<li id="user-item">{user.name}</li>
				<span className="x-button" onClick={() => props.deleteUserMth(user.key)}>
					X
				</span>
			</div>
		)
	})

	return <div>{listToDisplayJSX}</div>
}

export default ListToDisplay
