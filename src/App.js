import React from "react";
import AddTodo from "./features/tracker/AddTodo";
import Todos from "./features/tracker/Todos";
import "./tailwind.output.css";

function App() {
	return (
		<div className="max-w-sm mx-auto m-2 p-2 bg-white rounded-sm shadow-xl">
			<header className="block uppercase text-bold text-center m-6">
				Todos
			</header>
			<AddTodo />
			<Todos />
		</div>
	);
}

export default App;
