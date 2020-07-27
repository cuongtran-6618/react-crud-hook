import todoSlice, { addTodo } from "../features/tracker/todoSlice";
describe("tracker reducer", () => {
	it("should have an initial value", () => {
		expect(todoSlice(undefined, {})).toEqual([]);
	});

	it("should add a new tracker when dispatch add record event", () => {
		expect(
			todoSlice([], {
				type: addTodo.type,
				payload: {
					day: "01/05/2018",
					duration: 125,
					distance: 3.5,
				},
			})
		).toEqual([
			{
				day: "01/05/2018",
				duration: 125,
				distance: 3.5,
			},
		]);
	});
});
