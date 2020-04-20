import React from "react";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "../Utils/protected-route.js";
import Home from "../Pages/Home";
import Authentication from "../Pages/Authentication";
import FourOFour from "../Pages/404Error";
import API from "../Utils/api-routes";

const validateToken = () => {
	const currentDate = new Date();
	const expDate = localStorage.getItem("expiration-date");
	const token = localStorage.getItem("accessToken");

	console.log(currentDate);
	console.log(expDate);

	let validToken = false;

	if (!token) {
		console.log("no token");
		validToken = false;
	} else if (new Date(expDate) < new Date()) {
		API.logoutUser();
		validToken = false;
	} else {
		validToken = true;
	}
	console.log(validToken);
	return validToken;
};

const Router = (props) => (
	<Switch>
		<ProtectedRoute
			path="/home"
			component={Home}
			isAuth={validateToken()}
		/>
		<Route exact path="/login" component={Authentication} />
		<Route component={FourOFour} />
	</Switch>
);
export default Router;
