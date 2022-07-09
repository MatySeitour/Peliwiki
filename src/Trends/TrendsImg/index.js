import React from "react";
import "./TrendsImg.css"

function TrendsImg({ image, title, loading, rating }) {
    if (!loading) {
        return [
            <div className="trends-img__container">
                <img alt={title} className="trends-img" src={"https://image.tmdb.org/t/p/w500/" + image} />
                <div className="trends-info__container">
                    <h4 className="title-movie">{title}</h4>
                    <span className="star">★<p className="trends-rating">{rating}</p></span>
                </div>
            </div>
        ]
    }
    else {
        return [
            <div className="trends-img__loading"></div>
        ]
    }
}

export { TrendsImg };