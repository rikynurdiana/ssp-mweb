import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LogoEfishery from "../../assets/efishery-logo.svg";
import { useNavigate } from "react-router-dom";
// import { HouseDoor } from "react-bootstrap-icons";
import HomeIcon from "../../assets/efish/House-Outline.svg";
import "./styles.scss";

const Navigation = () => {
	const navigate = useNavigate();
	const handleBackToHome = () => {
		navigate({
			pathname: `/`,
		});
	};

	return (
		<Navbar expand="lg" fixed="top" style={{ backgroundColor: "#ffffff" }}>
			<Container>
				<Navbar.Brand href="/">
					<img src={LogoEfishery} alt="logo" />
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					onClick={() => handleBackToHome()}
				>
					{/* <HouseDoor color="#b3b3b3" size={40} /> */}
					<img
						src={HomeIcon}
						alt="house"
						width={50}
						style={{ marginRight: "-15px" }}
					/>
				</Navbar.Toggle>
			</Container>
		</Navbar>
	);
};

export default Navigation;
