import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

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
			<form
				onSubmit={handleSubmit}
				className="text-center flex justify-between bg-gray-200 p-2"
			>
				<input
					name="description"
					placeholder="What you do?"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className="p-2 flex-grow mr-2"
				/>
				<button
					type="submit"
					variant="outlined"
					color="primary"
					className="flex-grow-0 p-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded font-bold"
				>
					+
				</button>
			</form>
		</div>
	);
};

export default AddTodo;
