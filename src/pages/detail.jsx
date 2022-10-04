import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Tambakudang from "../assets/tambakudang.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Udang from "../assets/udang.png";
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

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
							<div className="img-wrapper">
								<img src={Udang} alt="image" width="100%" />
							</div>
						</Col>
						<Col xs={7} sm={7} md={7}>
							<div className="section">
								<div className="title">PRODUCT NAME</div>
								<div className="desc">Whiteleg Shrimp</div>
								<div className="desc">
									(Litopenaeus vannamei)
								</div>
							</div>
							<div className="section">
								<div className="title">PRODUCED BY</div>
								<div className="desc">CAMARONERA</div>
								<div className="desc">CACHGRAN</div>
							</div>
							<div className="section">
								<div className="title">PACKED BY</div>
								<div className="desc">PLANTA OMARSA ABEL</div>
								<div className="desc">GILBERT</div>
							</div>
							<div className="section">
								<div className="title">CITY / COUNTRY</div>
								<div className="desc">DURAN / ECUADOR</div>
							</div>
						</Col>
					</Row>
				</div>
				<Container>
					<div className="line-bar">
						<ul>
							<li onClick={handleClickToMaps}>
								<div className="title">
									Your Shrimp was born at
								</div>
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
								<div className="location">
									CAMARONERA CACHUGRAN
								</div>
								<div>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Maxime mollitia, molestiae
									quas vel sint commodi repudiandae
									consequuntur voluptatum
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
		</Container>
	);
};

export default Detail;
