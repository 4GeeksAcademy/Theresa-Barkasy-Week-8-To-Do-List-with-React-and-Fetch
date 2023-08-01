import React, {useState} from "react";

const NewToDo = () => {
    const[input, setInput] = useState("");
    const [items, setItems] = useState([]);

    function addItem() {

    if (!input) {
        alert("You can't create an empty task!")
        return;
    }

    const item = {
        id: (Math.floor(Math.random() * 1000)),
        value: {input},
    };

        setItems(oldList => [...oldList, input]);
        setInput("");

        // console.log(items)
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
            {items.map(item => {
                return (
                    <li key={item.id}>{item.value}</li>
                )
            })}
        </ul>            
        </>
    );
};

export default NewToDo;