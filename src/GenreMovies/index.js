import "./GenreMovies.css"
import { Link } from "react-router-dom";

function GenreMovies({ movies }) {
    console.log(movies)
    const idsKeyGenreMovies = [
        {
            id: 1,
        },
        {
            id: 2,
        },
    ];
    return (
        <>
            <ul className="genre-movies__container">
                {movies.map((movie) => (
                    <li className="genre-movie">
                        <article className="genre-movie__container">
                            <Link to={`/movie/${movie.id}`} className="genre-img__container">
                                <img alt={movie.title} className="trends-img" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />
                                <div className="trends-info__container">
                                    <h4 className="title-movie">{movie.title}</h4>
                                </div>
                            </Link>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    )
}

export { GenreMovies };