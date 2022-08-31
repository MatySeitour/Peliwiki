import { Link } from "react-router-dom"
import "./SearchResults.css"


function SearchResults({ movieId, title, image, titleSerie }) {

    if (image !== null && title) {
        return (
            <li className="trends-movies__container">
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
            </li>
        )
    }

    else if (image !== null && titleSerie) {
        return (
            <li className="trends-movies__container">
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
            </li>
        )
    }

    else if (image === null) {
        return (
            <li className="trends-movies__container">
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
            </li>
        )

    }

    <div>hola</div>

}

export { SearchResults }