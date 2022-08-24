import "./RankedMovie.css"
import { Link } from "react-router-dom";

function RankedMovie({ title, movieImage, rating, rankedId }) {
    return (
        <Link to={`/movie/${rankedId}`} className="ranked-movie_container">
            <img alt={title} src={"https://image.tmdb.org/t/p/w500/" + movieImage} className="ranked-movie"></img>
            <div className="ranked-info__container">
                <h4 className="ranked-title">{title}</h4>
            </div>
        </Link>
    );
}

export { RankedMovie };