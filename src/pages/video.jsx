import { useEffect } from "react";
import YouTube from "react-youtube";
import Container from "react-bootstrap/Container";
import EfreshImg from "../assets/efish/eFresh.svg";

const Video = () => {
	const opts = {
		height: "220px",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	const _onReady = (event) => {
		event.target.pauseVideo();
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="video-wrapper">
			<div className="efresh-image">
				<img src={EfreshImg} alt="efresh" />
			</div>
			<div className="line"></div>
			<div className="video-player">
				<YouTube videoId="ZrzqFYAodWU" opts={opts} onReady={_onReady} />
			</div>

			<Container>
				<div className="video-section-content">
					<div className="title-content">
						<h1>Mualim</h1>
						<h3>
							is a small scale farmer that started his first pond
							in 2017 with traditional practice.
						</h3>
					</div>
					<div className="description-content">
						Mualim is a small scale farmer who started his first
						pond in 2017 with traditional practice. Right now, he’s
						managing 6 ponds and implementing technology to increase
						his productivity. Shrimp farm is his main source of
						income. He works day and night, carefully taking care of
						the shrimp to ensure the harvest is successful, in a
						good quality, so his wife and kids can have a good
						livelihood.
						<div style={{ marginTop: "20px" }}>
							With you consuming the shrimp from smallholder
							farmers, you help to support his family and
							community to foster.
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Video;
