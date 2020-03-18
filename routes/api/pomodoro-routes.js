const router = require("express").Router();

const {
	newPomodoro,
	getPomodoroDetails
} = require("../../controllers/pomodoro-controller");

router.route("/:_id?").get(getPomodoroDetails);

router.route("/create-pomodoro").post(newPomodoro);

module.exports = router;
