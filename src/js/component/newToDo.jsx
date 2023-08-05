import React, {useState} from "react";
import InputField from "./inputField";
import ToDoItem from "./toDoItem";

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
            <InputField input={input} setInput={setInput} />
            <button className="createNewTask" onClick={addItem}>
              create new task
            </button>
          </div>
          <div className="listWrapper">
            <ul>
              {items.map((item, index) => (
                <ToDoItem
                  key={index}
                  item={item}
                  index={index}
                  removeListItem={removeListItem}
                />
              ))}
              <li>{
                items.length == 1 ? `${items.length} task left`
                : items.length > 1 ? `${items.length} tasks left` 
                : "Do or do not, there is no try."}</li>
            </ul>
          </div>
        </>
      );
    };
    
    export default NewToDo;