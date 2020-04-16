import React, { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

import API from "../../Utils";

function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginUser = (credentials) => {
		API.loginUser(credentials)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		if (email && password) {
			let userCredentials = {
				email: email,
				password: password,
			};
			loginUser(userCredentials);
		}
	};

	return (
		<Form>
			<FormGroup row>
				<Label for="exampleEmail" sm={2}>
					Email
				</Label>
				<Col sm={10}>
					<Input
						type="email"
						name="email"
						id="exampleEmail"
						placeholder="Email@pomodoro.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="examplePassword" sm={2}>
					Password
				</Label>
				<Col sm={10}>
					<Input
						type="password"
						name="password"
						id="examplePassword"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Col sm={12}>
					<Button onClick={handleFormSubmit}>Sign In</Button>
				</Col>
			</FormGroup>
		</Form>
	);
}

export default SignIn;
