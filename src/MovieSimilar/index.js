import { Link } from "react-router-dom";

function MovieSimilar({ movieSimilarId, movieSimilarImage, movieSimiilarTitle }) {
    return (
        <>
            <Link to={`/movie/${movieSimilarId}`}>
                <li className="movie-belong">
                    <img className="image-belong" alt={movieSimiilarTitle} src={`https://image.tmdb.org/t/p/w500/${movieSimilarImage}`} />
                </li>
            </Link>

        </>
    )
}

export { MovieSimilar };