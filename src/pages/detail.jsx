import { useEffect } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import DataLine from "./components/dataLine";

import ImagesRound from "../assets/efish/images-round.png";
import EfreshImg from "../assets/efish/eFresh.svg";
import ShrimpImg from "../assets/efish/udang.png";

const Detail = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Container>
			<div className="detail-section-content">
				<div className="image-content">
					<img src={ImagesRound} alt="kotak" />
				</div>
				<div className="title-content">
					<h1>This is where your</h1>
					<h1 style={{ marginTop: "-5px" }}>shrimp comes from.</h1>
				</div>
				<div className="description-content">
					Carefully taken care by a farmer that gives you premium,
					sustainable, and healthy food. Read about their story and
					how you help support their business to grow!
				</div>
				<div className="efresh-image">
					<img src={EfreshImg} alt="efresh" />
				</div>
				<div className="line"></div>
				<div className="two-side">
					<Row>
						<Col xs={6} sm={6} md={6}>
							<div className="img-wrapper">
								<img src={ShrimpImg} alt="image" />
							</div>
						</Col>
						<Col xs={6} sm={6} md={6}>
							<div className="section">
								<div className="title">Product Name</div>
								<div className="desc">Whiteleg Shrimp</div>
								<div className="desc">
									(Litopenaeus vannamei)
								</div>
							</div>
							<div className="section">
								<div className="title">Produced By</div>
								<div className="desc">Mualim</div>
							</div>
							<div className="section">
								<div className="title">Packed By</div>
								<div className="desc">PT Bumi Pangan Utama</div>
								<div className="desc">(BAP Certified)</div>
							</div>
							<div className="section">
								<div className="title">City/Country</div>
								<div className="desc">Serang, Indonesia</div>
							</div>
						</Col>
					</Row>
				</div>
				<DataLine />
			</div>
		</Container>
	);
};

export default Detail;
