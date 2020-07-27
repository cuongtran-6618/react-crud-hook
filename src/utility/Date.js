export const getCurrentDate = () => {
	const event = new Date(Date.UTC(2012, 11, 20));
	const options = { year: "numeric", month: "numeric", day: "numeric" };
	return event.toLocaleDateString("gb-GB", options);
};

export const getDuration = (timeInSecond) => {
	if (!timeInSecond || timeInSecond === 0) {
		return "00:00:00";
	}

	let hour, minute, second;
	hour = Math.floor(timeInSecond / (60 * 60));
	minute = Math.floor((timeInSecond - hour * 60 * 60) / 60);
	second = timeInSecond - minute * 60 - hour * 60 * 60;

	return formatTime(hour).concat(
		":",
		formatTime(minute).concat(":", formatTime(second))
	);
};

export const formatTime = (time) => {
	if (!time) {
		return "00";
	}

	if (String(time).length === 2) {
		return String(time);
	}

	if (time > 59) {
		console.log("here");
		const message = "max input shouldn't more than 59";
		throw new Error(message);
	}

	return "0".concat("", time);
};
