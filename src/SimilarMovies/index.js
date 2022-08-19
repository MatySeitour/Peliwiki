import axios from "axios"
import { API_KEY } from "../secret"
import { useEffect, useState } from "react"
import { MovieSimilar } from "../MovieSimilar";
import "./SimilarMovies.css"

function SimilarMovies({ similarIdMovie }) {
    console.log(similarIdMovie)
    const [similarMovie, setSimilarMovie] = useState([]);

    useEffect(() => {
        async function getSimilarMovies() {
            try {
                const rest = await axios.get(`https://api.themoviedb.org/3/movie/${similarIdMovie}/similar?api_key=` + API_KEY);
                setSimilarMovie(rest.data.results)
            }
            catch (error) {
                console.log(error);
            }
        }
        getSimilarMovies();
    }, [similarIdMovie])

    return (
        <section>
            <div className="similarMovies">
                <div>
                    <h3 className="belong-colection__title">SIMI<b>LAR</b> MO<b>VIES</b></h3>
                </div>

                <ul className="similarMovies__container">
                    {similarMovie.map((movie) => (
                        <MovieSimilar
                            key={movie.id}
                            movieSimilarId={movie.id}
                            movieSimilarImage={movie.poster_path}
                            movieSimilarTitle={movie.title}
                        />
                    ))}
                </ul>


            </div>
        </section>
    )
}

export { SimilarMovies }