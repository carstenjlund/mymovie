import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const Popular = () => {
	const [movies, setMovies] = useState();

	useEffect(() => {
		axios(
			"https://api.themoviedb.org/3/movie/popular?region=DK&api_key=c28b09251184479f999a2baafd615444"
		).then((response) => setMovies(response.data.results));
	}, []);
	return (
		<section>
			{movies?.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</section>
	);
};

export default Popular;
