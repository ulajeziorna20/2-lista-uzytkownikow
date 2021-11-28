import React from "react";
import './ListToDisplay.css';



const ListToDisplay = (props) => {


    let listToDisplayJSX = props.userListMth.map((name, index) => {
       
        return <div key={index}>{name}</div>
    })

    return (
        <div>
            {listToDisplayJSX}
        </div>
    )
}

export default ListToDisplay;

