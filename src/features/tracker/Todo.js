import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { getDuration } from "../../utility/Date";
import { toggleTodo, runCounter, toggleCounterActive } from "./todoSlice";

const Todo = (todo) => {
	const dispatch = useDispatch();
	const [active, setActive] = useState(todo.active);
	const [sessionInterval, setSessionInterval] = useState(undefined);

	/**
	 * This function handles start/stop timer
	 * @param {*} e
	 */
	const handleToggleCountTime = (e) => {
		if (!active) {
			startCountingTime();
		} else {
			stopCountingTime();
		}

		toggleStatusOfTodo(!active);
	};

	const startCountingTime = () => {
		const interval = setInterval(() => {
			dispatch(runCounter(todo.id));
		}, 1000);

		setSessionInterval(interval);
	};

	const stopCountingTime = () => {
		if (sessionInterval) {
			clearInterval(sessionInterval);
		} else {
			console.log("no interval found.... can not stop tracker");
		}
	};

	const toggleStatusOfTodo = (active) => {
		setActive(active);
		dispatch(toggleCounterActive(todo.id, active));
	};

	const toggleTodoComplete = () => {
		// if the todo is not complete then when set it complete it need to stop timer if that is running too
		if (!todo.completed && !todo.active) {
			stopCountingTime();

			toggleStatusOfTodo(false);
		}

		//change the complete status
		dispatch(toggleTodo(todo.id));
	};

	return (
		<li className="border flex justify-between p-2 items-center">
			<input
				type="checkbox"
				id={todo.id}
				value={todo.completed}
				className="flex-grow-0 flex-1 my-2"
			/>
			<label
				htmlFor={todo.id}
				onClick={toggleTodoComplete}
				style={{
					textDecoration: todo.completed ? "line-through" : "none",
				}}
				className="flex-1 p-2 text-left flex-grow "
			>
				{todo.description}
			</label>
			<span
				style={{
					textVisible: todo.duration > 0 ? "line-through" : "none",
				}}
				className="flex-1 p-2 text-center flex-grow-0"
			>
				{getDuration(todo.duration)}
			</span>
			<button
				onClick={handleToggleCountTime}
				disabled={todo.completed}
				className={`inline-flex items-center flex-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex-grow-0 ${
					todo.completed ? "opacity-50 cursor-not-allowed" : ""
				}`}
			>
				{!todo.active ? "Start" : "Stop"}
			</button>
		</li>
	);
};

Todo.propTypes = {
	todo: PropTypes.objectOf(
		PropTypes.shape({
			day: PropTypes.string.isRequired,
			duration: PropTypes.number.isRequired,
			description: PropTypes.string.isRequired,
		}).isRequired
	),
};

export default Todo;
