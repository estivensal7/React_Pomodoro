import React from "react";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";

const Cards = ({ background, icon, header, data, textColor, stripeColor }) => {
	return (
		<Row>
			<Col>
				<Card
					body
					className="cards"
					style={{
						backgroundColor: background,
						color: textColor,
						borderRight: `15px solid ${stripeColor}`,
						borderRadius: "0px",
						boxShadow: "0px 2px 4px #777",
					}}>
					<CardTitle>{header}</CardTitle>
					<CardText>
						With supporting text below as a natural lead-in to
						additional content.
					</CardText>
				</Card>
			</Col>
		</Row>
	);
};

export default Cards;
