import { Route, Routes } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Landing from "./pages/landing";
import Detail from "./pages/detail";
import Maps from "./pages/maps";
import Video from "./pages/video";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoEfishery from "./assets/logo-efish.png";
import "./App.scss";

function App() {
	const ListRouter = () => {
		return (
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/detail" element={<Detail />} />
				<Route path="/maps" element={<Maps />} />
				<Route path="/video" element={<Video />} />
			</Routes>
		);
	};

	return (
		<div className="App">
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="/">
						<img src={LogoEfishery} alt="logo" width="50px" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/detail">Detail</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<ListRouter />
		</div>
	);
}

export default App;
