import React from "react";
import Todolist from "./Todolist.jsx";

const Home = () => {

	return (
		<div className="container bg-secondary bg-gradient pt-5" style={{ height: "800px", width: "1000px"}}>
			<div className="text-center">
				<h1 className="fs-1 mb-3">todos</h1>
				<Todolist />
			</div>
		</div>
	);
};

export default Home;