import React from "react";
import './ListToDisplay.css';



const ListToDisplay = (props) => {


    let listToDisplayJSX = props.userListMth.map((object, index) => {
       
        return <div key={index}>{object.name}</div>
    })

    return (
        <div>
            {listToDisplayJSX}
        </div>
    )
}

export default ListToDisplay;

