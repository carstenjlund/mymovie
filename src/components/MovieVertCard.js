import "./movievertcard.css"
const MovieVertCard = ({ image, title, rating }) => {
	return (
		<article className="movieVertCard">
			<img
				src={`https://image.tmdb.org/t/p/w500${image}`}
				alt={`${title} poster`}
			/>
			<h2>{title}</h2>
			<p> {rating}/10 IMDb</p>
		</article>
	);
};

export default MovieVertCard;
