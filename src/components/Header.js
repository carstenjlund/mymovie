import "./header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";
const Header = () => {
	const location = useLocation();
	return (
		<header
			className={`header ${
				location.pathname.startsWith("/detail") && "subpage"
			}`}
		>
			{location.pathname.startsWith("/detail") && (
				<Link to="/">&larr;</Link>
			)}
			{!location.pathname.startsWith("/detail") && <h1>MyMovie</h1>}
			<ToggleSwitch />
		</header>
	);
};

export default Header;
