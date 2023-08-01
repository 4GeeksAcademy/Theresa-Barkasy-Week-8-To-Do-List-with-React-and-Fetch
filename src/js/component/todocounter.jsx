import React, {useState} from "react";
import NewToDo from "./newtodo";
import MapList from "./maplist";

const ToDoCounter = () => {
    return(
        <li>{todos.length} tasks</li>
    )
}

export default ToDoCounter;