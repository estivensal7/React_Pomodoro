const router = require("express").Router();
const withAuth = require("../../middleware/authentication");

const {
	getUserProfile,
	register,
	login,
	getAllPomodoros,
} = require("../../controllers/user-controller");

router.route("/").get(withAuth, getUserProfile);

router.route("/login").post(login);

router.route("/register").post(register);

router.route("/pomodoros/:id?").get(withAuth, getAllPomodoros);

router.route("/checkAuth").get(withAuth);

module.exports = router;
