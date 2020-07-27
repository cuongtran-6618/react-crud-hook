import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AddTodo = () => {
	const [description, setDescription] = useState("");

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(addTodo({ description }));

		//reset the form
		setDescription("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<TextField
					name="description"
					placeholder="What you do?"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button type="submit" variant="outlined" color="primary">
					ADD
				</Button>
			</form>
		</div>
	);
};

export default AddTodo;
