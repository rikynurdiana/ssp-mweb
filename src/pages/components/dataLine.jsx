import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./styles.scss";

const DataLine = () => {
	const navigate = useNavigate();

	const handleClickToVideo = () => {
		navigate({
			pathname: `/video`,
		});
	};

	const handleClickToMaps = () => {
		navigate({
			pathname: `/maps`,
		});
	};

	const handleClickToFarms = () => {
		navigate({
			pathname: `/farms`,
		});
	};

	const handleClickToLocations = () => {
		navigate({
			pathname: `/locations`,
		});
	};

	return (
		<Container>
			<div className="line-bar">
				<ul>
					<li onClick={handleClickToLocations}>
						<div className="title">Your Shrimp was born at</div>
						<div className="location">Hatchery</div>
						<div className="location-detail">
							PT Banggai Central Shrimp
						</div>
						<div className="sub-title">
							it was moved to the farm on
						</div>
						<div className="date">4 March 2022</div>
					</li>
					<li>
						<div className="title" onClick={handleClickToVideo}>
							The farm where it was raised is
						</div>
						<div className="location" onClick={handleClickToVideo}>
							Mualim Farm
						</div>
						<div
							className="description"
							onClick={handleClickToVideo}
						>
							It was raised in Mualim Farm, a natural ecosystem
							close to the natural habitat. The farmer is a
							smallholder farmer, raising the shrimp without any
							antibiotics and dangerous chemicals. They use the
							best feed and carefully maintain the waste. The pond
							density is also low, which enables your shrimp to
							swim freely.
						</div>
						<div
							className="sub-title"
							style={{ marginTop: "10px" }}
							onClick={handleClickToMaps}
						>
							The farm is located in
						</div>
						<div className="location" onClick={handleClickToMaps}>
							Serang, Banten, Indonesia
						</div>
					</li>
					<li onClick={handleClickToFarms}>
						<div className="title">This is how it is farmed</div>
						<div className="description">
							This smallholder farmer uses technology to feed the
							shrimp and the app to track the data. Because of
							that, you can see and verify the quality of their
							farm and be assured that this is grown sustainably.
						</div>
					</li>
				</ul>
			</div>
		</Container>
	);
};

export default DataLine;
