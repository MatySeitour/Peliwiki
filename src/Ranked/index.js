import "./Ranked.css"
import { useEffect, useState } from "react";
import { RankedMovie } from "../RankedMovie";
import axios from "axios";
import { API_KEY } from "../secret";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



function Ranked() {
    const [moviesRated, setMoviesRated] = useState([])
    return (

        useEffect(() => {

            async function getRatedMovies() {
                const rest = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?page=1&&language=en&&api_key=` + API_KEY);
                setMoviesRated(rest.data.results);
            }

            getRatedMovies();
        }, []),
        console.log(moviesRated),

        <article className="ranked-container" >
            {
                moviesRated.map((movie) =>
                    <RankedMovie
                        title={movie.title}
                        movieImage={movie.poster_path}
                        rating={movie.vote_average}
                    />
                )
            }
        </article >
    );

}

export { Ranked };