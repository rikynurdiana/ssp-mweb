import { useEffect } from "react";
import React from "react";
import DataLine from "./components/dataLine";

const Maps = () => {
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
			<div style={{ marginTop: "20px" }}>
				<DataLine />
			</div>
		</div>
	);
};

export default Maps;
