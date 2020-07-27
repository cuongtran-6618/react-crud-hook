import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

export const Todos = () => {
	const todos = useSelector((state) => state.todos);

	return (
		<ul>
			{todos.map((todo) => {
				return <Todo key={todo.id} {...todo} />;
			})}
		</ul>
	);
};

export default Todos;
