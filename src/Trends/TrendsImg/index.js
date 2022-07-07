import React from "react";
import "./TrendsImg.css"

function TrendsImg({ image, title }) {
    return [
        <div className="trends-img__container">
            <img alt={title} className="trends-img" src={"https://image.tmdb.org/t/p/w500/" + image} />
            <div className="trends-img__hover"></div>
        </div>
    ]
}

export { TrendsImg }