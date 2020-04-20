import axios from "axios";

export default {
	// USER ROUTES
	loginUser: function (userCredentials) {
		return axios
			.post("http://localhost:3001/api/user/login", userCredentials)
			.then((token) => {
				console.log(token);
				localStorage.setItem("accessToken", token.data);
				localStorage.setItem("original-access-date", new Date());

				let now = new Date();
				now.setMinutes(now.getMinutes() + 60);
				let expDate = new Date(now);
				localStorage.setItem("expiration-date", expDate);
				this.isAuthenticated = true;
			})
			.catch((err) => console.log(err));
	},
	registerUser: function (newUserCredentials) {
		return axios.post(
			"http://localhost:3001/api/user/register",
			newUserCredentials
		);
	},
	getUserProfile: function () {
		return axios.get("http://localhost:3001/api/user/");
	},
	getUserPomodors: function (id) {
		return axios.get(`http://localhost:3001/api/user/pomodoros/${id}`);
	},
	logoutUser: function () {
		localStorage.removeItem("accessToken");
	},
};
