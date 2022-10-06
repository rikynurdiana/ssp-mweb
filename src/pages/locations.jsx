import { useEffect } from "react";
import React from "react";
import DataLine from "./components/dataLine";
import LocationImg from "../assets/efish/location.png";

const Locations = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="locations-section-content">
			<div className="text">
				<div className="title">Sulawesi</div>
				<div className="description">Indonesia</div>
			</div>
			<div className="images">
				<img src={LocationImg} alt="location" />
			</div>
			<div style={{ marginTop: "20px" }}>
				<DataLine />
			</div>
		</div>
	);
};

export default Locations;
