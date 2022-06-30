import React from "react";
import "./TrendsMovie.css"

function TrendsMovie({ children, title }) {
    return (
        <li className="trends-movies__container">
            {children}

            <h3 className="trends-movies__title">{title}</h3>
        </li>
    )
}

export { TrendsMovie }