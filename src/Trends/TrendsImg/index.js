import { useEffect, useRef, useState } from "react";
import useIntersection from "../../CustomHooks/useIntersection";
import { Link } from "react-router-dom";
import "./TrendsImg.css"



function TrendsImg({ image, title, loading, rating, movieDetail, setMovieDetail, imageDetail, setImageDetail, movieId }) {
    const ref = useRef(null);
    const screen = useIntersection(ref);

    const trendsImgKeys = [
        {
            id: 1
        },
    ]

    if (!loading) {
        return [
            <article key={trendsImgKeys[0].id} className="article-trends" ref={ref} >
                <li className="trends-movies__container">
                    {
                        screen && <>
                            <Link to={`/movie/${movieId}`}
                                className="trends-img__container">
                                <img alt={title} className="trends-img" src={"https://image.tmdb.org/t/p/w500/" + image} />
                                <div className="trends-info__container">
                                    <h4 className="title-movie">{title}</h4>
                                </div>
                            </Link>
                        </>
                    }
                </li>
            </article>

        ]
    }
    else {
        return [
            <div className="trends-img__loading"></div>
        ]
    }
}

export { TrendsImg };