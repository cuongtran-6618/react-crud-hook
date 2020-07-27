import React from "react";
import AddTodo from "./features/tracker/AddTodo";
import Todos from "./features/tracker/Todos";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">Todos</header>
			<AddTodo />
			<Todos />
		</div>
	);
}

export default App;
