import React, { useState } from "react";
import {
	Col,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	FormFeedback,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

import API from "../../Utils";

function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const registerUser = (credentials) => {
		API.registerUser(credentials)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		if (firstName && lastName && email && password) {
			let userInfo = {
				email: email,
				password: password,
				firstName: firstName,
				lastName: lastName,
			};

			registerUser(userInfo);
		}
	};

	const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	let checkEmail = email.length > 0 ? emailRex.test(email) : null;

	let checkPassword = password.length > 0 ? password.length > 5 : null;

	return (
		<Form>
			<FormGroup row>
				<Label for="firstName" sm={2}>
					First Name
				</Label>
				<Col sm={10}>
					<Input
						type="text"
						name="firstName"
						id="firstName"
						placeholder="First Name"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Label for="lastName" sm={2}>
					Last Name
				</Label>
				<Col sm={10}>
					<Input
						type="text"
						name="lastName"
						id="lastName"
						placeholder="Last Name"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
					/>
				</Col>
			</FormGroup>
			{/* <AvForm
					onValidSubmit={this.handleValidSubmit}
					onInvalidSubmit={this.handleInvalidSubmit}>
					<AvField
						name="email"
						label="Email Address"
						type="email"
						required
					/>
				</AvForm> */}
			<FormGroup row>
				<Label for="exampleEmail" sm={2}>
					Email
				</Label>
				<Col sm={10}>
					<Input
						type="email"
						name="email"
						id="exampleEmailReg"
						placeholder="Email@pomodoro.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						invalid={checkEmail == false}
					/>
					<FormFeedback>Please enter a valid email.</FormFeedback>
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
						id="examplePasswordReg"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						invalid={checkPassword == false}
					/>
					<FormFeedback>
						Password must be at least 6 characters long.
					</FormFeedback>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Col sm={12}>
					<Button onClick={handleFormSubmit}>Register</Button>
				</Col>
			</FormGroup>
		</Form>
	);
}

export default SignUp;
