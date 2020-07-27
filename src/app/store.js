import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/tracker/todoSlice";

export default configureStore({
	reducer: {
		todos: todoReducer,
	},
});
