import { useState } from "react"
import "./TrendsMovie.css"

function TrendsMovie({ children, loading }) {

    if (!loading) {
        return (
            <li className="trends-movies__container">
                {children}
            </li>
        )
    }
    else {
        return (
            <li className="trends-movies__container">
                {children}
                <div className="trends-movies__title--loading"></div>
            </li>
        )
    }

}

export { TrendsMovie };