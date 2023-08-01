import React, {useState} from "react";
import NewToDo from "./newtodo"; 
// import MapList from "./maplist";
// import ToDoCounter from "./todocounter";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">to do</h1>
			<ul>
				<NewToDo />
				{/* <MapList /> */}
				{/* <ToDoCounter /> */}
			</ul>
		</div>
	);
};

export default Home;
