import React from "react";
import Todolist from "./Todolist.jsx";

const Home = () => {

	return (
		<div className="background container bg-secondary bg-gradient pt-5 rounded-1">
			<div className="container text-center border border-dark w-75 border-opacity-25 fw-light bg-white rounded-1 p-5">
				<h1 className="container fs-1 mb-3 bg-white">Todo-List</h1>
				<Todolist />
			</div>
		</div>
	);
};

export default Home;