import React, {useState} from "react";
import Header from "./header";
import NewToDo from "./newtodo"; 


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Header />
			<ul>
				<NewToDo />
			</ul>
		</div>
	);
};

export default Home;
