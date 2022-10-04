import { useState } from "react";
import Container from "react-bootstrap/Container";
import Kotak from "../assets/kotak.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import Search from "../assets/search.png";
import "../App.scss";

const Landing = () => {
	const navigate = useNavigate();
	const [show, setShow] = useState(false);

	const [startScan, setStartScan] = useState(false);
	const [data, setData] = useState("");

	const handleClose = () => {
		setShow(false);
		setStartScan(false);
	};
	const handleShow = () => {
		setShow(true);
		setStartScan(true);
	};

	const handleScan = async (result) => {
		console.log(`loaded data data`, result);
		if (result !== undefined) {
			console.log(`loaded >>>`, result);
			setData(result.text);
			setStartScan(false);
			navigate({
				pathname: `/detail`,
			});
			location.reload();
		}
	};
	const handleError = (err) => {
		console.error(err);
	};

	return (
		<Container>
			<div className="section-content">
				<div className="image-content">
					<img src={Kotak} alt="kotak" width="100%" />
				</div>
				<div className="title-content">
					<h1>Hello,</h1>
					<h2>your shrimp is ready to tell its great story.</h2>
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
				<div className="button-content" onClick={handleShow}>
					<img src={Search} alt="search" width={50} />
				</div>
				<Modal show={show} onHide={handleClose} centered>
					<Modal.Header closeButton>
						<Modal.Title>QR Reader</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{startScan && (
							<>
								<QrReader
									delay={1000}
									onError={handleError}
									onResult={(result) => handleScan(result)}
									constraints={{
										facingMode: "environment",
									}}
									// style={{ width: "300px" }}
								/>
							</>
						)}
						{data !== "" && <p>{data}</p>}
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</Container>
	);
};

export default Landing;
