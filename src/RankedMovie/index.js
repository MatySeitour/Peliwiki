import "./RankedMovie.css"
import { Link } from "react-router-dom";
import useIntersection from "../CustomHooks/useIntersection";
import { useRef } from "react";

function RankedMovie({ title, movieImage, rating, rankedId }) {
    const ref = useRef(null);

    const screen = useIntersection(ref);

    const idsKeyRankedMovie = 1

    return [
        <article key={idsKeyRankedMovie} ref={ref}>
            {
                screen && <>
                    < Link to={`/movie/${rankedId}`} className="ranked-movie_container" >
                        <img alt={title} src={"https://image.tmdb.org/t/p/w500/" + movieImage} className="ranked-movie"></img>
                        <div className="ranked-info__container">
                            <h4 className="ranked-title">{title}</h4>
                        </div>
                    </Link >
                </>
            }
        </article>



    ];
}

export { RankedMovie };