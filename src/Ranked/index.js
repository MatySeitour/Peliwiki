import "./Ranked.css"
import { useEffect, useState } from "react";
import { RankedMovie } from "../RankedMovie";
import axios from "axios";
import { API_KEY } from "../secret";
import { useThemeContext } from "../Context/ThemeContext";

function Ranked({ loading, setLoading }) {
    const [moviesRated, setMoviesRated] = useState([])

    const { theme } = useThemeContext()

    console.log(theme);
    useEffect(() => {

        async function getRatedMovies() {
            const rest = await axios.get(`https://api.themoviedb.org/3/movie/popular?page=3&&language=en&&api_key=` + API_KEY);
            setLoading({
                loading: false,
            })

            setMoviesRated(rest.data.results);
        }

        getRatedMovies();
    }, [])

    if (!loading) {
        return (

            <article className="ranked-container" >
                {
                    moviesRated.map((movie) =>
                        <RankedMovie
                            key={movie.id}
                            rankedId={movie.id}
                            title={movie.title}
                            movieImage={movie.poster_path}
                            rating={movie.vote_average}
                        />
                    )
                }
            </article >
        );
    }
    else {
        return (
            <article className="ranked-container">
                <div className="ranked-loading"></div>
                <div className="ranked-loading"></div>
                <div className="ranked-loading"></div>
                <div className="ranked-loading"></div>
                <div className="ranked-loading"></div>
                <div className="ranked-loading"></div>
                <div className="ranked-loading"></div>
                <div className="ranked-loading"></div>
                <div className="ranked-loading"></div>
            </article>
        )
    }


}

export { Ranked };