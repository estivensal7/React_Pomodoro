const router = require("express").Router();

const {
	newPomodoro,
	getPomodoroDetails,
	updatePomodoro
} = require("../../controllers/pomodoro-controller");

router.route("/:id?").get(getPomodoroDetails);

router.route("/create-pomodoro").post(newPomodoro);

router.route("/update-pomodoro/:id?").put(updatePomodoro);

module.exports = router;
