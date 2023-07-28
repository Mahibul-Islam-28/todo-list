import React, {useState} from "react";


const ToDoList = (props) => {


    return (
    <div className="listStyle">

    <i className="fa-solid fa-xmark"
    onClick={() => {
        props.onSelect(props.id)
    }}></i>
        <li> {props.text} </li>
    </div>
    );
    
}

export default ToDoList;