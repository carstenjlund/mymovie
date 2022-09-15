import { Outlet } from "react-router-dom";
import "./layout.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
	return (
		<>
			<Header />
			<hr />

			{/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
		the child routes we defined above. */}
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
