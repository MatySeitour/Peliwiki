import "./MovieBelong.css"
import { Link } from "react-router-dom"

function MovieBelong({ belongTitle, belongImage, belongId }) {
    return (
        <>
            <Link to={`/movie/${belongId}`}>
                <li className="movie-belong">
                    <img className="image-belong" alt={belongTitle} src={`https://image.tmdb.org/t/p/w500/${belongImage}`} />
                </li>
            </Link>

        </>

    )
}

export { MovieBelong }