import "./header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
			<h1>MyMovie</h1>
			<button>switch</button>
		</header>
	);
};

export default Header;
