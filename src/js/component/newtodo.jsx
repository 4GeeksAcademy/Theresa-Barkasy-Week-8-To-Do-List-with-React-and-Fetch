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

    function removeListItem(index) {
        const newList = items.filter((item, i) => i !== index);
        setItems(newList);
      }

    return(
        <>
        <div className="inputWrapper">
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
        </div>
        <div className="listWrapper">
            <ul>
                {items.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                            <button className="deleteButton" onClick={() => removeListItem(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                </svg>
                            </button>
                            </li>
                    )
                })}
                <li className="footer">{items.length} tasks left</li>
            </ul>
        </div>         
        </>
    );
};

export default NewToDo;