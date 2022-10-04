import Container from "react-bootstrap/Container";
import Tambakudang from "../assets/tambakudang.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Supres from "../assets/supres.png";
import { useNavigate } from "react-router-dom";

const Detail = () => {
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

	return (
		<Container>
			<div className="detail-section-content">
				<div className="image-content">
					<img src={Tambakudang} alt="kotak" width="100%" />
				</div>
				<div className="title-content">
					<h1>Hello,</h1>
					<h3>your shrimp is ready to tell its great story.</h3>
				</div>
				<div className="description-content">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Maxime mollitia, molestiae quas vel sint commodi repudiandae
					consequuntur voluptatum laborum numquam blanditiis harum
					quisquam eius sed odit fugiat iusto fuga praesentium optio,
					eaque rerum! Provident similique accusantium nemo autem.
					Veritatis obcaecati tenetur iure eius earum ut molestias
					architecto voluptate aliquam nihil, eveniet aliquid culpa
					officia aut! Impedit sit sunt quaerat, odit, tenetur error,
					harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
					quia.
				</div>
				<div className="two-side">
					<Row>
						<Col xs={5} sm={5} md={5}>
							<img src={Supres} alt="image" width="100%" />
						</Col>
						<Col xs={7} sm={7} md={7}>
							<div className="section">
								<div className="title">Title 1</div>
								<div className="desc">Description 1</div>
							</div>
							<div className="section">
								<div className="title">Title 2</div>
								<div className="desc">Description 2</div>
							</div>
							<div className="section">
								<div className="title">Title 3</div>
								<div className="desc">Description 3</div>
							</div>
							<div className="section">
								<div className="title">Title 4</div>
								<div className="desc">Description 4</div>
							</div>
						</Col>
					</Row>
				</div>
				<div className="line-bar">
					<ul>
						<li onClick={handleClickToMaps}>
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
			</div>
		</Container>
	);
};

export default Detail;
