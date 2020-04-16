import React, { useState } from "react";
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Row,
	Col
} from "reactstrap";
import classnames from "classnames";

import SignInForm from "../../Components/SignInForm";
import SignUpForm from "../../Components/SignUpForm";

function Authentication() {
	const [activeTab, setActiveTab] = useState("1");
	const toggle = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	};

	return (
		<div>
			<Nav tabs>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === "1" })}
						onClick={() => {
							toggle("1");
						}}>
						Sign In
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === "2" })}
						onClick={() => {
							toggle("2");
						}}>
						Sign Up
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={activeTab}>
				<TabPane tabId="1">
					<Row>
						<Col sm="12">
							<SignInForm />
						</Col>
					</Row>
				</TabPane>
				<TabPane tabId="2">
					<Row>
						<Col sm="12">
							<SignUpForm />
						</Col>
					</Row>
				</TabPane>
			</TabContent>
		</div>
	);
}

export default Authentication;
