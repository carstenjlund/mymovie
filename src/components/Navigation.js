import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/detail">Details</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
