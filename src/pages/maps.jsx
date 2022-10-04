import React from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const Maps = () => {
	const navigate = useNavigate();
	// const containerStyle = {
	// 	width: "400px",
	// 	height: "400px",
	// };

	// const center = {
	// 	lat: -3.745,
	// 	lng: -38.523,
	// };

	// const { isLoaded } = useJsApiLoader({
	// 	id: "google-map-script",
	// });

	// const [map, setMap] = React.useState(null);

	// const onLoad = React.useCallback(function callback(map) {
	// 	const bounds = new window.google.maps.LatLngBounds(center);
	// 	map.fitBounds(bounds);
	// 	setMap(map);
	// }, []);

	// const onUnmount = React.useCallback(function callback(map) {
	// 	setMap(null);
	// }, []);

	// return isLoaded ? (
	// 	<GoogleMap
	// 		mapContainerStyle={containerStyle}
	// 		center={center}
	// 		zoom={10}
	// 		onLoad={onLoad}
	// 		onUnmount={onUnmount}
	// 	>
	// 		{/* Child components, such as markers, info windows, etc. */}
	// 		<></>
	// 	</GoogleMap>
	// ) : (
	// 	<></>
	// );

	const handleClickToVideo = () => {
		console.log("ke video");
		navigate({
			pathname: `/video`,
		});
	};

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
						<li>
							<div>Your Shrimp was born at</div>
							<div>LAB_MAR_BRAVO</div>
							<div>Salinas Ecuador</div>
							<div>it was moved to the farm on</div>
							<div>Jan - 05 -2020</div>
						</li>
						<li onClick={handleClickToVideo}>
							<div>The farm where it was raised is</div>
							<div>CAMARONERA CACHUGRAN</div>
							<div>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Maxime mollitia, molestiae
								quas vel sint commodi repudiandae consequuntur
								voluptatum
							</div>
							<div>The farm is located in</div>
							<div>ISLA CHUPADORES GRANDE Ecuador</div>
						</li>
					</ul>
				</div>
			</Container>
		</div>
	);
};

export default Maps;
