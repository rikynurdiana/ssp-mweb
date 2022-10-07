import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import EfreshImg from "../assets/efish/eFresh.svg";
import FarmImage from "../assets/efish/images.png";

const Farms = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="farm-section-content">
			<div className="efresh-image">
				<img src={EfreshImg} alt="efresh" />
			</div>
			<div className="line"></div>

			<div className="images">
				<img src={FarmImage} alt="images" width="100%" />
			</div>

			<Container>
				<div className="title-content">
					<h1>Mualim Farm</h1>
					<h3>Serang, Banten, Indonesia</h3>
				</div>
				<div className="line-left"></div>

				<div className="farm-content">
					<Row
						style={{
							padding: "0px 40px 0px 40px",
							marginTop: "30px",
						}}
					>
						<Col xs={6}>
							<div className="title">Feed type</div>
							<div className="description">
								<div>Pelleted feed,</div>
								<div>24% protein</div>
								<div>PT STP (BAP)</div>
							</div>
						</Col>
						<Col xs={6}>
							<div className="title">Seed type</div>
							<div className="description">
								<div>PL10</div>
								<div>PT Banggai Central Farm</div>
								<div>(BAP Certified)</div>
							</div>
						</Col>
					</Row>

					<Row
						style={{
							padding: "0px 40px 0px 40px",
							marginTop: "30px",
						}}
					>
						<Col xs={6}>
							<div className="title">Pond type</div>
							<div className="description">
								<div>Lining with HDPE</div>
								<div>(CBIB Certified)</div>
							</div>
						</Col>
						<Col xs={6}>
							<div className="title">Antibiotics</div>
							<div className="description">
								<div>None</div>
							</div>
						</Col>
					</Row>

					<Row
						style={{
							padding: "0px 40px 0px 40px",
							marginTop: "30px",
						}}
					>
						<Col xs={6}>
							<div className="title">Chemical Use</div>
							<div className="description">
								<div>Non-chemical disinfectant</div>
								<div>(Aqualisan - Solvay),</div>
								<div>Fermented Probiotics</div>
							</div>
						</Col>
						<Col xs={6}>
							<div className="title">Waste management</div>
							<div className="description">
								<div>Available</div>
							</div>
						</Col>
					</Row>

					<Row
						style={{
							padding: "0px 40px 0px 40px",
							marginTop: "30px",
						}}
					>
						<Col xs={6}>
							<div className="title">Energy source</div>
							<div className="description">
								<div>Electric grid</div>
							</div>
						</Col>
						<Col xs={6}>
							<div className="title">Feed Conversion Ratio</div>
							<div className="description">
								<div>1.3</div>
							</div>
						</Col>
					</Row>

					<Row
						style={{
							padding: "0px 40px 0px 40px",
							marginTop: "30px",
						}}
					>
						<Col xs={6}>
							<div className="title">Survival Rate</div>
							<div className="description">
								<div>88%</div>
							</div>
						</Col>
						<Col xs={6}>
							<div className="title">Harvest Data</div>
							<div className="description">
								<div>2,165 kg in 95 days</div>
							</div>
						</Col>
					</Row>

					<Row
						style={{
							padding: "0px 40px 0px 40px",
							marginTop: "30px",
						}}
					>
						<Col xs={6}>
							<div className="title">Biosecurity scoring</div>
							<div className="description">
								<div>74 (Good)</div>
							</div>
						</Col>
						<Col xs={6}>
							<div className="title">Disease</div>
							<div className="description">
								<div>None</div>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
};

export default Farms;
