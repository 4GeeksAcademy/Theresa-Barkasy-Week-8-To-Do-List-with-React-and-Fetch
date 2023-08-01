import React, {useState} from "react";
import NewToDo from "./newtodo"; 
import MapFunction from "./mapFunction";
// import ToDoCounter from "./todocounter";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">to do</h1>
			<ul>
				<NewToDo />
				{/* <MapFunction /> */}
				{/* <ToDoCounter /> */}
			</ul>
		</div>
	);
};

export default Home;
