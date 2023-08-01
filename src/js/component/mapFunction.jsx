import React, {useState} from "react";
// import NewToDo from "./newtodo";
// import ToDoCounter from "./todocounter";

const MapFunction = () => {

    let toDoList = input.map(input => {
        return(
            <li key={input.id}>{input.value}</li>
        )
    })

    return(
        <>
            <ul className="items">
                {toDoList}
            </ul>
        </>
    )
};

export default MapFunction;