import { useEffect } from "react";
import DataLine from "./components/dataLine";

const Maps = () => {
	const position =
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d701.4491451898596!2d106.27050977878842!3d-5.995340941539429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4108c6103da84222!2zNcKwNTknNDMuMSJTIDEwNsKwMTYnMTUuMCJF!5e0!3m2!1sid!2sid!4v1665034054083!5m2!1sid!2sid";

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="maps-section-content">
			<iframe
				src={position}
				width="100%"
				height="450"
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
			<div style={{ marginTop: "20px" }}>
				<DataLine />
			</div>
		</div>
	);
};

export default Maps;
