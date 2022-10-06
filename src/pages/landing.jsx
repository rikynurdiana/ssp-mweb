import { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";

import PackingImg from "../assets/efish/packing-images.png";
import ScanBtn from "../assets/efish/scan-button.png";

const Landing = () => {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const [startScan, setStartScan] = useState(false);

	const handleClose = () => {
		setShow(false);
		setStartScan(false);
	};

	const handleShow = () => {
		setShow(true);
		setStartScan(true);
	};

	const handleScan = async (result) => {
		if (result !== undefined) {
			setStartScan(false);
			navigate({
				pathname: `/detail`,
			});
			location.reload(); // di refresh supaya scanner nya mati
		}
	};

	const handleError = (err) => {
		console.error(err);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Container>
			<div className="section-content">
				<div className="image-content">
					<img src={PackingImg} alt="packing-images" width="80%" />
				</div>
				<div className="title-content">
					<h1>It's not just a shrimp.</h1>
					<h1 style={{ marginTop: "-6px" }}>
						It's a <span>story</span>
					</h1>
				</div>
				<div className="line"></div>
				<div className="description-content">
					We provide you traceable information about the shrimp that
					you eat, so you know where it comes from, how it is farmed,
					and the people that you support along the way.
				</div>
				<div className="button-content" onClick={handleShow}>
					<img src={ScanBtn} alt="search" />
				</div>
				<Modal show={show} onHide={handleClose} centered>
					<Modal.Body>
						{startScan && (
							<>
								<div className="title-modal">Qr Scanner</div>
								<QrReader
									delay={1000}
									onError={handleError}
									onResult={(result) => handleScan(result)}
									constraints={{
										facingMode: "environment",
									}}
									style={{
										width: "200px",
										heigth: "200px",
									}}
								/>
							</>
						)}
					</Modal.Body>
				</Modal>
			</div>
		</Container>
	);
};

export default Landing;
