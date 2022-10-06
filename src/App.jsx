import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Landing from "./pages/landing";
import Detail from "./pages/detail";
import Maps from "./pages/maps";
import Video from "./pages/video";
import Farms from "./pages/farms";
import Locations from "./pages/locations";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LogoEfishery from "./assets/logo-efish.png";
import "./App.scss";

function App() {
	const navigate = useNavigate();
	const handleBackToHome = () => {
		navigate({
			pathname: `/`,
		});
	};

	const ListRouter = () => {
		return (
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/detail" element={<Detail />} />
				<Route path="/maps" element={<Maps />} />
				<Route path="/video" element={<Video />} />
				<Route path="/farms" element={<Farms />} />
				<Route path="/locations" element={<Locations />} />
			</Routes>
		);
	};

	return (
		<div className="App">
			<Navbar
				expand="lg"
				fixed="top"
				style={{ backgroundColor: "#ffffff" }}
			>
				<Container>
					<Navbar.Brand href="/">
						<img src={LogoEfishery} alt="logo" width="50px" />
					</Navbar.Brand>
					<Navbar.Toggle
						aria-controls="basic-navbar-nav"
						onClick={() => handleBackToHome()}
					/>
				</Container>
			</Navbar>

			<ListRouter />
		</div>
	);
}

export default App;
