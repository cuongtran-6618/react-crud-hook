import React, { useState } from "react";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { useDispatch, useEffect, useSelector } from "react-redux";
import { toggleTodo, runCounter, toggleCountTime } from "./todoSlice";

const Todo = (todo) => {
	const dispatch = useDispatch();
	const [id, setId] = useState(todo.id);
	const [active, setActive] = useState(todo.active);
	const [sessionInterval, setSessionInterval] = useState(undefined);

	const handleToggleCountTime = (e) => {
		// check if current todo is Active?
		// no -> trigger Interval, set interval, set active to true

		if (!active) {
			console.log("todo is not actived -> start tracking ....");
			const interval = setInterval(() => {
				dispatch(runCounter(id));
			}, 1000);

			setSessionInterval(interval);
			console.log("sessionInterval was set to: " + interval);
		} else {
			console.log("todo actived -> stop tracking ....");
			if (sessionInterval) {
				console.log("found interval");
				clearInterval(sessionInterval);
			} else {
				console.log("no interval found.... can not stop tracker");
			}
		}

		setActive(!active);
		dispatch(toggleCountTime(id));
	};
	return (
		<li>
			<Checkbox id={todo.id} value={todo.completed}></Checkbox>
			<label
				htmlFor={todo.id}
				onClick={() => {
					dispatch(toggleTodo(todo.id));
				}}
				style={{
					textDecoration: todo.completed ? "line-through" : "none",
				}}
			>
				{todo.description}
			</label>
			<span
				style={{
					textVisible: todo.duration > 0 ? "line-through" : "none",
				}}
			>
				{todo.duration}
			</span>
			<Button onClick={handleToggleCountTime}>
				{!todo.active ? "Start" : "Stop"}
			</Button>
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
