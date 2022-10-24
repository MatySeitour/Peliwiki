import { useState, useEffect } from "react";
import { API_KEY } from "../secret";
import axios from "axios";
import "./BelongColection.css"
import { MovieBelong } from "../MovieBelong";

function BelongColection({ belongMovies, movieId }) {
    const [belong, setBelong] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)

        async function getBelong() {
            if (belongMovies !== null) {
                try {
                    const rest = await axios.get(`https://api.themoviedb.org/3/collection/${belongMovies}?api_key=` + API_KEY);
                    setBelong({
                        ...belong,
                    });
                    setBelong(rest.data.parts);
                }
                catch (error) {
                    console.error(error);
                }
            }
        }
        getBelong();
    }, [belongMovies])

    if (belongMovies === null) {
        return (
            <section className="inactive"></section>
        )
    }

    return (
        <section>
            <div className="belong-colection">
                <div>
                    <h3 className="belong-colection__title">BEL<b>ONGS</b> TO COLEC<b>TION</b></h3>
                </div>

                <ul className="belongs-movies__container">
                    {belong.map((movie) => (
                        <MovieBelong
                            key={movie.id}
                            belongTitle={movie.title}
                            belongImage={movie.poster_path}
                            belongId={movie.id}
                        />
                    ))}
                </ul>


            </div>
        </section>
    )
}

export { BelongColection }