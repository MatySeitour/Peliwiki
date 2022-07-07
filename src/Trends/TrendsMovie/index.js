import { useState } from "react"
import "./TrendsMovie.css"

function TrendsMovie({ children, title }) {
    const [loading, setLoading] = useState(true);

    if (!loading) {
        return (
            <li className="trends-movies__container">
                {children}
                <h3 className="trends-movies__title">{title}</h3>
            </li>
        )
    }
    else {
        return (
            <li className="trends-movies__container">
                {children}
                <div className="trends-movies__title--loading">{title}</div>
            </li>
        )
    }

}

export { TrendsMovie }