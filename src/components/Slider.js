import axios from "axios";
import { useState, useEffect } from "react";
import MovieVertCard from "./MovieVertCard";
import "./slider.css";

const Slider = () => {
	const [movies, setmovies] = useState();

	useEffect(() => {
		axios(
			"https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=c28b09251184479f999a2baafd615444"
		).then((response) => setmovies(response.data.results));
	}, []);

	return !movies ? (
		<h3>Loading...</h3>
	) : (
		<section className="slider">
			{movies.map((movie) => (
				<MovieVertCard
					key={movie.id}
					image={movie.poster_path}
					title={movie.title}
					rating={movie.vote_average}
					id={movie.id}
				/>
			))}
		</section>
	);
};

export default Slider;
