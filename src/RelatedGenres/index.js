import "./RelatedGenres.css"
import { Link } from "react-router-dom";

function RelatedGenres({ genreName, genreId }) {

    return (
        <Link to={`/genre/${genreName}`} className="genre__container">
            <span></span>
            <p>{genreName}</p>
        </Link>
    )
}

export { RelatedGenres };