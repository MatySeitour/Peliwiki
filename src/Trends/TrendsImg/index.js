import { Link } from "react-router-dom";
import "./TrendsImg.css"



function TrendsImg({ image, title, loading, rating, movieDetail, setMovieDetail, imageDetail, setImageDetail, movieId }) {

    if (!loading) {
        return [
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
                <img alt={title} className="trends-img" src={"https://image.tmdb.org/t/p/w500/" + image} />
                <div className="trends-info__container">
                    <h4 className="title-movie">{title}</h4>
                </div>
            </Link>
        ]
    }
    else {
        return [
            <div className="trends-img__loading"></div>
        ]
    }
}

export { TrendsImg };