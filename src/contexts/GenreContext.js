import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GenreContext = createContext();

const GenreProvider = ({ children }) => {
	const [genres, setGenres] = useState();

	useEffect(() => {
		axios(
			"https://api.themoviedb.org/3/genre/movie/list?api_key=c28b09251184479f999a2baafd615444"
		).then((response) => setGenres(response.data.genres));
	}, []);

	return (
		<GenreContext.Provider value={{ genres }}>
			{children}
		</GenreContext.Provider>
	);
};

export default GenreProvider;
