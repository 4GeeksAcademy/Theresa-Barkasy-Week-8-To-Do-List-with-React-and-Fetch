import React, {useState} from "react";

const NewToDo = () => {
    const[input, setInput] = useState("");
    const [items, setItems] = useState([]);

    function addItem() {

    if (!input) {
        alert("You can't create an empty task!")
        return;
    }

    setItems(oldList => [...oldList, input]);
    setInput("");

        console.log(items)
    }

    return(
        <>
        <ul>
            <input 
            type="text" 
            className="newToDo"
            placeholder="let's do something"
            onChange={(event) => setInput(event.target.value)}
            value={input}
            ></input>
            <button 
                className="createNewTask"
                onClick={addItem}
                >create new task
            </button>
        </ul>
        <ul>
            {items.map((item, index) => {
                return (
                    <li key={index}>{item}</li>
                )
            })}
            <li>{items.length} tasks left</li>
        </ul>            
        </>
    );
};

export default NewToDo;