import React from 'react'
import './ListToDisplay.css'

const ListToDisplay = (props) => {
	let listToDisplayJSX = props.userList.map((user) => {
		return (
			<ul className="user-element" key={user.key}>
				<li id="user-item">{user.name}</li>
				<span className="x-button" onClick={() => props.deleteUserMth(user.key)}>
					X
				</span>
			</ul>
		)
	})

	return <div>{listToDisplayJSX}</div>
}

export default ListToDisplay
