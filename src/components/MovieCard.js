import "./moviecard.css";
import LazyLoad from "react-lazyload";
import { useContext } from "react";
import { GenreContext } from "../contexts/GenreContext";

const MovieCard = ({ movie }) => {
	const { genres } = useContext(GenreContext);
	return genres && movie ? (
		<article className="moviecard">
			<LazyLoad>
				<img
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title + " poster"}
					loading="lazy"
				/>
			</LazyLoad>
			<div>
				<h3>{movie.title}</h3>
				<p className="moviecard__imdb">
					<i className="fa-solid fa-star"></i> {movie.vote_average}/10
					IMDb
				</p>
				<p>
					{movie?.genre_ids.map((id) => {
						let currentGenre = genres?.find(
							(genre) => genre.id === id
						);
						return (
							<span
								className="moviecard__genre"
								key={currentGenre.id}
							>
								{currentGenre.name}
							</span>
						);
					})}
				</p>
			</div>
		</article>
	) : null;
};

export default MovieCard;
