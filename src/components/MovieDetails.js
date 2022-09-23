import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
	const movie_id = useParams().movie_id;

	const [details, setDetails] = useState();
    const [cast, setCast] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();

	useEffect(() => {
		axios(
			`https://api.themoviedb.org/3/movie/${movie_id}?api_key=c28b09251184479f999a2baafd615444`
		).then((result) => {
            setDetails(result.data)
            setHours(Math.floor(result.data.runtime / 60))
            setMinutes(result.data.runtime %60)
        });
	}, []);

    useEffect(() => {
		axios(
			`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=c28b09251184479f999a2baafd615444`
		).then((result) => {
            console.log(result.data)
        });
	}, []);

	return !details ? <p>Loading...</p> : (
        <>
            <div className="top">
                <img src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`} alt="" />
            </div>
            <article>
                <h2>{details.title}</h2>
                <p>{details.vote_average.toFixed(1)}/10 IMDb</p>
                {details.genres.map(genre => (
                    <span>{genre.name}</span>
                ))}

                <section style={{display:"grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
                    <p>length:<br />
                    {hours}h {minutes}min</p>
                    <p>language:<br />
                    {details.spoken_languages[0].name}</p>
                    <p>Year:<br />
                    {details.release_date.split("-")[0]}</p>
                </section>
                
                <h2>Description</h2>
                <p>{details.overview}</p>

            </article>
        </>
        );
};

export default MovieDetails;
