import "./MovieBelong.css"
import { Link } from "react-router-dom"
import { useRef } from "react"
import useIntersection from "../CustomHooks/useIntersection"

function MovieBelong({ belongTitle, belongImage, belongId }) {
    const ref = useRef()
    const screen = useIntersection(ref)

    return (
        <>
            <Link ref={ref} to={`/movie/${belongId}`}>
                {
                    screen && <>
                        <li className="movie-belong">
                            <img className="image-belong" alt={belongTitle} src={`https://image.tmdb.org/t/p/w500/${belongImage}`} />
                        </li>
                    </>
                }
            </Link>

        </>

    )
}

export { MovieBelong }