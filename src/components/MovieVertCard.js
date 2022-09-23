import "./movievertcard.css";
import { Link } from "react-router-dom";
const MovieVertCard = ({ image, title, rating, id }) => {
	return (
		<Link to={`/detail/${id}`} className="movieVertCard">
			<img
				src={`https://image.tmdb.org/t/p/w500${image}`}
				alt={`${title} poster`}
				loading="lazy"
			/>
			<h3>{title}</h3>
			<p className="movieVertCard__rating">
				<i className="fa-solid fa-star"></i> {rating}/10 IMDb
			</p>
		</Link>
	);
};

export default MovieVertCard;
