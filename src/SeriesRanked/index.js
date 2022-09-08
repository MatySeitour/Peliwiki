import { Link } from "react-router-dom";
import { useRef } from "react";
import useIntersection from "../CustomHooks/useIntersection";


function SeriesRanked({ title, movieImage, rating, seresId }) {
    const ref = useRef(null);
    const screen = useIntersection(ref);

    return (
        <article ref={ref}>
            {
                screen && <>
                    <Link to={`/series/${seresId}`} className="ranked-movie_container">
                        <img alt={title} src={"https://image.tmdb.org/t/p/w500/" + movieImage} className="ranked-movie"></img>
                        <div className="ranked-info__container">
                            <h4 className="ranked-title">{title}</h4>
                            <span className="star">★<p className="rating">{rating}</p></span>
                        </div>
                    </Link>
                </>
            }
        </article>

    );
}

export { SeriesRanked }