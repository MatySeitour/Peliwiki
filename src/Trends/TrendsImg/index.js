import React from "react";
import "./TrendsImg.css"

function TrendsImg({ image }) {
    return [
        <div className="trends-img__container">
            <img className="trends-img" src={"https://image.tmdb.org/t/p/w500/" + image} />
            <div className="trends-img__hover"></div>
        </div>
    ]
}

export { TrendsImg }