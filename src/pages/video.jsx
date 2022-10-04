import { useEffect } from "react";
import YouTube from "react-youtube";
import Container from "react-bootstrap/Container";

const Video = () => {
	const opts = {
		height: "220px",
		width: "100%",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	const _onReady = (event) => {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div style={{ marginTop: "100px" }}>
				<YouTube videoId="dvoNwa3369I" opts={opts} onReady={_onReady} />
			</div>

			<Container>
				<div className="video-section-content">
					<div className="title-content">
						<h1>Camaronera Cachugran,</h1>
						<h3>Taking steps into the future.</h3>
					</div>
					<div className="description-content">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Maxime mollitia, molestiae quas vel sint commodi
						repudiandae consequuntur voluptatum laborum numquam
						blanditiis harum quisquam eius sed odit fugiat iusto
						fuga praesentium optio, eaque rerum! Provident similique
						accusantium nemo autem. Veritatis obcaecati tenetur iure
						eius earum ut molestias architecto voluptate aliquam
						nihil, eveniet aliquid culpa officia aut! Impedit sit
						sunt quaerat, odit, tenetur error, harum nesciunt ipsum
						debitis quas aliquid. Reprehenderit, quia.
					</div>
				</div>
			</Container>
		</>
	);
};

export default Video;
