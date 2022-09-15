import { Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Home from "./views/Home";
import Detail from "./views/Detail";
import GenreProvider from "./contexts/GenreContext";

function App() {
	return (
		<GenreProvider>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="detail/:movie_id" element={<Detail />} />
				</Route>
			</Routes>
		</GenreProvider>
	);
}

export default App;
