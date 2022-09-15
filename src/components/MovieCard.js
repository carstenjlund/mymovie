import "./moviecard.css";

const MovieCard = ({ movie }) => {
	return (
		<article className="moviecard">
			<img
				src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title + " poster"}
			/>
			<div>
				<h2>{movie.title}</h2>
				<p className="moviecard__imdb">{movie.vote_average}/10 IMDb</p>
			</div>
		</article>
	);
};

export default MovieCard;
