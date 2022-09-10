import { Link } from "react-router-dom"
import useIntersection from "../CustomHooks/useIntersection"
import { useRef } from "react"
import "./SearchResults.css"


function SearchResults({ movieId, title, image, titleSerie }) {
    const ref = useRef();

    const screen = useIntersection(ref)
    if (image && title) {
        return (
            <li ref={ref} className="trends-movies__container">
                {
                    screen && <>
                        <Link to={`/movie/${movieId}`}
                            // onClick={() => {
                            //     setImageDetail(image)
                            //     setMovieDetail({
                            //         ...movieDetail,
                            //         image: true,
                            //         title: { title }
                            //     });
                            // }}
                            className="trends-img__container">
                            <img alt={title} className={`trends-img`} src={"https://image.tmdb.org/t/p/w500/" + image} />
                            <div className="trends-info__container">
                                <h4 className="title-movie">{!title && titleSerie}</h4>
                                <h4 className="title-movie">{!titleSerie && title}</h4>
                            </div>
                        </Link>
                    </>
                }

            </li>
        )
    }

    else if (image && titleSerie) {
        return (
            <li ref={ref} className="trends-movies__container">
                {
                    screen && <>
                        <Link to={`/series/${movieId}`}
                            // onClick={() => {
                            //     setImageDetail(image)
                            //     setMovieDetail({
                            //         ...movieDetail,
                            //         image: true,
                            //         title: { title }
                            //     });
                            // }}
                            className="trends-img__container">
                            <img alt={titleSerie} className={`trends-img`} src={"https://image.tmdb.org/t/p/w500/" + image} />
                            <div className="trends-info__container">
                                <h4 className="title-movie">{titleSerie}</h4>
                            </div>
                        </Link>
                    </>
                }

            </li>
        )
    }

    else if (!image) {
        return (
            <li ref={ref} className="trends-movies__container">
                {
                    screen && <>
                        <Link to={`/series/${movieId}`}
                            // onClick={() => {
                            //     setImageDetail(image)
                            //     setMovieDetail({
                            //         ...movieDetail,
                            //         image: true,
                            //         title: { title }
                            //     });
                            // }}
                            className="trends-img__container">
                            <div className="error-img"></div>
                            <div className="trends-info__container">
                                <h4 className="title-movie">{titleSerie}</h4>
                                <h4 className="title-movie">{title}</h4>
                            </div>
                        </Link>
                    </>
                }

            </li>
        )

    }

}

export { SearchResults }