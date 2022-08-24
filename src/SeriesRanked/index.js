import { Link } from "react-router-dom";

function SeriesRanked({ title, movieImage, rating, seresId }) {
    return (
        <Link to={`/series/${seresId}`} className="ranked-movie_container">
            <img alt={title} src={"https://image.tmdb.org/t/p/w500/" + movieImage} className="ranked-movie"></img>
            <div className="ranked-info__container">
                <h4 className="ranked-title">{title}</h4>
                <span className="star">★<p className="rating">{rating}</p></span>
            </div>
        </Link>
    );
}

export { SeriesRanked }