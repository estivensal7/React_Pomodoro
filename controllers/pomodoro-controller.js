// import dependencies
const { Pomodoro } = require("../models");

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
// GET '/api/pomodoro/:id?'
const getPomodoroDetails = (req, res) => {
	Pomodoro.find({ _id: req.params.id })
		.then(pomodoroModel => res.status(200).json(pomodoroModel))
		.catch(err => res.status(500).json(err));
};

// update a pomodoro's details
// PUT '/api/pomodoro/update-pomodoro/:id?'
const updatePomodoro = (req, res) => {
	Pomodoro.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then(pomodoroModel => res.status(200).json(pomodoroModel))
		.catch(err => res.status(500).json(err));
};

// export our methods
module.exports = {
	getPomodoroDetails,
	newPomodoro,
	updatePomodoro
};
