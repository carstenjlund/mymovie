import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Home from "./views/Home";
import Detail from "./views/Detail";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="detail/:movie_id" element={<Detail />} />
			</Route>
		</Routes>
	);
}

export default App;
