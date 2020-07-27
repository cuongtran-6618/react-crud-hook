import { getDuration } from "../utility/Date";
import { formatTime } from "../utility/Date";

describe("getDuration utitlity", () => {
	it("return 00:00:00 string if there is nothing passed in", () => {
		expect(getDuration()).toEqual("00:00:00");
	});

	it("return 00:00:59 string if there is 59 seconds", () => {
		expect(getDuration(59)).toEqual("00:00:59");
	});

	it("return 00:01:15 string if there is 75 seconds", () => {
		expect(getDuration(75)).toEqual("00:01:15");
	});

	it("return 01:01:05 string if there is 3665 seconds", () => {
		expect(getDuration(3665)).toEqual("01:01:05");
	});
});

describe("format time", () => {
	it("should return 00 if nothing passed in", () => {
		expect(formatTime()).toEqual("00");
	});

	it("should return 05 if 5 passed in", () => {
		expect(formatTime(5)).toEqual("05");
	});

	it("should return 55 if 5 passed in", () => {
		expect(formatTime(55)).toEqual("55");
	});
});
