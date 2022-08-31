import { Link } from "react-router-dom";

function MovieSimilar({ movieSimilarId, movieSimilarImage, movieSimilarTitle }) {
    return (
        <>
            <Link to={`/movie/${movieSimilarId}`}>
                <li className="movie-belong">
                    <img className="image-belong" alt={movieSimilarTitle} src={`https://image.tmdb.org/t/p/w500/${movieSimilarImage}`} />
                </li>
            </Link>

        </>
    )
}

export { MovieSimilar };