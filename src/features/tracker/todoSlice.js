import { createSlice } from "@reduxjs/toolkit";
import { getCurrentDate } from "../../utility/Date";
import cuid from "cuid";
// defined slice
export const todoSlide = createSlice({
	name: "todos",
	initialState: [],
	reducers: {
		addTodo: {
			prepare: (description) => {
				return {
					payload: {
						id: cuid(),
						day: getCurrentDate(),
						...description,
						duration: 0,
						completed: false,
						active: false, //use for control counting duration
					},
				};
			},
			reducer: (state, action) => {
				console.log(action.payload);
				// add new record to state
				state.push(action.payload);
			},
		},

		toggleCompleteStateOfTodo: {
			reducer: (state, action) => {
				return state.map((todo) => {
					return todo.id === action.payload
						? { ...todo, completed: !todo.completed }
						: todo;
				});
			},
		},

		toggleCounterActive: {
			reducer: (state, action) => {
				console.log("change active state: ", action, state);
				return state.map((todo) => {
					return todo.id === action.payload.id
						? { ...todo, active: action.payload.active }
						: todo;
				});
			},
			prepare: (id, active) => {
				return {
					payload: {
						id,
						active,
					},
				};
			},
		},

		runCounter: {
			reducer: (state, action) => {
				console.log("run counter with: " + action);
				return state.map((todo) => {
					return todo.id === action.payload
						? { ...todo, duration: todo.duration + 1 }
						: todo;
				});
			},
		},
	},
	// no default action since reducer generator will return state anyway for not mentioned action
});

//defined actions
export const {
	addTodo,
	toggleCompleteStateOfTodo,
	runCounter,
	toggleCounterActive,
} = todoSlide.actions;

export default todoSlide.reducer;
