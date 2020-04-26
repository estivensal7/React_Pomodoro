import React from "react";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "../../Components/Sidebar";
import navLinks from "../../navLinks.json";
import logo from "../../assets/images/logo.png";
import Cards from "../../Components/Cards";

function Home() {
	return (
		<>
			<Sidebar
				background="#232F3B"
				navLinks={navLinks}
				logo={logo}
				linkColor="#eee"
				hoverBackground="#FF3637"
			/>
			<Container id="home-container">
				<Row>
					<Col md={4}>
						<Cards
							header="Pomodoro Timer"
							background="#ddd"
							textColor="#3a3a3a"
							stripeColor="#00C7DA"
						/>
					</Col>
					<Col md={4}>
						<Cards
							header="Tasks Remaining"
							background="#ddd"
							textColor="#3a3a3a"
							stripeColor="#D1E14B"
						/>
					</Col>
					<Col md={4}>
						<Cards
							header="Daily Duration"
							background="#ddd"
							textColor="#3a3a3a"
							stripeColor="#FF3637"
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Home;
