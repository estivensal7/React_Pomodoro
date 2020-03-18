const router = require("express").Router();
const userRoutes = require("./user-routes");
const pomodoroRoutes = require("./pomodoro-routes");

router.use("/user", userRoutes);

router.use("/pomodoro", pomodoroRoutes);

module.exports = router;
