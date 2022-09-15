import "./movievertcard.css";
const MovieVertCard = ({ image, title, rating }) => {
	return (
		<article className="movieVertCard">
			<img
				src={`https://image.tmdb.org/t/p/w500${image}`}
				alt={`${title} poster`}
				loading="lazy"
			/>
			<h3>{title}</h3>
			<p className="movieVertCard__rating"> {rating}/10 IMDb</p>
		</article>
	);
};

export default MovieVertCard;
