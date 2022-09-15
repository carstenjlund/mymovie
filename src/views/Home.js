import Popular from "../components/Popular";
import Slider from "../components/Slider";
const Home = () => {
	return (
		<>
			<div>
				<h2 style={{ margin: "0 1.5rem 0.75rem" }}>Now Showing</h2>
				<Slider />
			</div>
			<div>
				<h2 style={{ margin: "0 1.5rem 0.75rem" }}>Popular</h2>
				<Popular />
			</div>
		</>
	);
};

export default Home;
