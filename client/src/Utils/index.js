import axios from "axios";

export default {
	// USER ROUTES
	// Login User
	loginUser: function(userCredentials) {
		return axios
			.post("http://localhost:3001/api/user/login", userCredentials)
			.then(token => {
				console.log(token);
				localStorage.setItem("accessToken", token.data);
			})
			.catch(err => console.log(err));
	},
	registerUser: function(newUserCredentials) {
		return axios.post(
			"http://localhost:3001/api/user/register",
			newUserCredentials
		);
	},
	getUserProfile: function() {
		return axios.get("http://localhost:3001/api/user/");
	},
	getUserPomodors: function(id) {
		return axios.get(`http://localhost:3001/api/user/pomodoros/${id}`);
	}
};
