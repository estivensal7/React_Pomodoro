import React from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";

import Authentication from "./Pages/Authentication";

function App() {
	return (
		<div className="App">
			<h1>REACT POMODOROS</h1>
			<Authentication />
		</div>
	);
}

export default App;
