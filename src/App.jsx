import { Route, Routes } from "react-router-dom";
import Navigation from "./pages/components/navigation";
import Landing from "./pages/landing";
import Detail from "./pages/detail";
import Maps from "./pages/maps";
import Video from "./pages/video";
import Farms from "./pages/farms";
import Locations from "./pages/locations";

import "./App.scss";

function App() {
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
			<Navigation />
			<ListRouter />
		</div>
	);
}

export default App;
