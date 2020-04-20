import React from "react";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "../../Components/Sidebar";
import navLinks from "../../navLinks.json";
import logo from "../../assets/images/logo.png";

function Home() {
	return (
		<>
			<Sidebar
				background="#333"
				navLinks={navLinks}
				logo={logo}
				linkColor="#eee"
				hoverBackground="#FF3637"
			/>
			<Container>
				<Row>
					<Col md={12}></Col>
				</Row>
			</Container>
		</>
	);
}

export default Home;
