import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Logo from "../../assets/images/logo.png";

function Sidebar({ background, hoverBackground, linkColor, navLinks, logo }) {
	const [hoverIndex, setHoverIndex] = useState(-1);
	const [navOpen, setNavOpen] = useState(false);

	return (
		<nav className="responsive-nav" style={{ background }}>
			<ul style={{ background }} className={navOpen ? "active" : ""}>
				<figure onClick={() => setNavOpen(!navOpen)}>
					<img
						src={logo}
						height="50px"
						width="50px"
						alt="React Pomodoro Logo"
					/>
				</figure>
				{navLinks.map((link, index) => {
					return (
						<li
							key={link.text}
							onMouseEnter={() => setHoverIndex(index)}
							onMouseLeave={() => setHoverIndex(-1)}
							style={{
								background:
									hoverIndex === index
										? hoverBackground || "#999"
										: "",
							}}>
							<Link
								to={link.path}
								style={{ color: linkColor || "#fff" }}>
								{link.text}
								<ion-icon name={link.icon} />
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Sidebar;
