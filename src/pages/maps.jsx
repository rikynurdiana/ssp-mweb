import { useEffect } from "react";
import React from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const Maps = () => {
	const navigate = useNavigate();

	const handleClickToVideo = () => {
		console.log("ke video");
		navigate({
			pathname: `/video`,
		});
	};

	const handleClickToMaps = () => {
		console.log("ke maps");
		navigate({
			pathname: `/maps`,
		});
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="maps-section-content">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.154823676032!2d107.63586435466716!3d-6.861984343027989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e77f69edf551%3A0x14c495539fc36585!2seFishery%20Head%20Office!5e0!3m2!1sid!2sid!4v1664903383350!5m2!1sid!2sid"
				width="100%"
				height="450"
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
			<Container>
				<div className="line-bar">
					<ul>
						<li onClick={handleClickToMaps}>
							<div className="title">Your Shrimp was born at</div>
							<div className="location">LAB_MAR_BRAVO</div>
							<div className="location-detail">
								Salinas Ecuador
							</div>
							<div className="sub-title">
								it was moved to the farm on
							</div>
							<div className="date">Jan - 05 -2020</div>
						</li>
						<li onClick={handleClickToVideo}>
							<div className="title">
								The farm where it was raised is
							</div>
							<div className="location">CAMARONERA CACHUGRAN</div>
							<div>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Maxime mollitia, molestiae
								quas vel sint commodi repudiandae consequuntur
								voluptatum
							</div>
							<div
								className="location"
								style={{ marginTop: "10px" }}
							>
								The farm is located in
							</div>
							<div className="date">
								ISLA CHUPADORES GRANDE Ecuador
							</div>
						</li>
					</ul>
				</div>
			</Container>
		</div>
	);
};

export default Maps;
