import "./GenreMovies.css"
import { Link } from "react-router-dom";

function GenreMovies({ movies, loadingGenreMovies }) {
    console.log(movies)

    return (
        <>
            {loadingGenreMovies ?
                <article className="genreMovie-loading__contaienr">
                    <div className="genreMovie-loading"></div>
                    <div className="genreMovie-loading"></div>
                    <div className="genreMovie-loading"></div>
                    <div className="genreMovie-loading"></div>
                    <div className="genreMovie-loading"></div>
                    <div className="genreMovie-loading"></div>
                    <div className="genreMovie-loading"></div>
                    <div className="genreMovie-loading"></div>
                    <div className="genreMovie-loading"></div>
                </article>
                :
                <ul className="genre-movies__container">
                    {movies.map((movie) => (
                        <li key={movie.id} className="genre-movie">
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
            }

        </>
    )
}

export { GenreMovies };
