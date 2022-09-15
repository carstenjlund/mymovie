import axios from "axios";
import { useState, useEffect } from "react";
import MovieVertCard from "./MovieVertCard";
const Slider = () => {
	const [movies, setmovies] = useState();

	useEffect(() => {
		axios(
			"https://api.themoviedb.org/3/movie/now_playing?language=da-DK&api_key=c28b09251184479f999a2baafd615444"
		).then((response) => setmovies(response.data.results));
	}, []);

	return !movies ? (
		<h3>Loading...</h3>
	) : (
		<section style={{ display: "flex", overflowX: "scroll", gap: "1.25rem", margin: "1rem 0 2.5rem" }}>
			{movies.map((movie) => (
				<MovieVertCard
					key={movie.id}
					image={movie.poster_path}
					title={movie.title}
					rating={movie.vote_average}
				/>
			))}
		</section>
	);
};

export default Slider;
