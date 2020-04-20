import React from "react";
import { Route, Redirect } from "react-router-dom";
// import Auth from "./api-routes.js";

const ProtectedRoute = ({ component: Component, isAuth, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAuth ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: "/login",
					}}
				/>
			)
		}
	/>
);

export default ProtectedRoute;
