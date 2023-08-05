import React  from "react";

const InputField = ({input, setInput}) => {
    return (
        <input 
            input="text"
            className="newToDo"
            placeholder="let's do something"
            onChange={(event) => setInput(event.target.value)}
            value={input}
        />
    );
};

export default InputField;