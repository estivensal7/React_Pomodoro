// import dependencies
const { Pomodoro } = require("../models");
const handle = require("../utils/promise-handler");

// create function to create a new pomodoro
// used when the POST route '/api/pomodoro/create-pomodoro' is hit
const newPomodoro = (req, res) => {
	console.log(req.body);
	// get information about the pomodoro out of req.body
	const { text, user_id, status } = req.body;

	// create a new pomodoro
	const pomodoro = new Pomodoro({ text, user_id, status });

	// create/save new pomodoro
	pomodoro.save(err => {
		if (err) {
			console.log(err);
			res.status(500).json({
				success: false,
				message: "Error creating new pomodoro, please try again."
			});
		} else {
			res.status(200).json({
				success: true,
				message: "Pomodoro Added!"
			});
		}
	});
};

// get pomodoro details
// GET '/api/pomodoro/:_id?'
const getPomodoroDetails = async (req, res) => {
	const [pomodoroErr, pomodoroDetails] = await handle(
		Pomodoro.findById(req._id)
	);

	if (pomodoroErr) {
		res.status(500).json(pomodoroErr);
	} else {
		res.status(200).json(pomodoroDetails);
	}
};

// export our methods
module.exports = {
	getPomodoroDetails,
	newPomodoro
};
