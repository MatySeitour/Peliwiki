import "./RankedMovie.css"

function RankedMovie({ title, movieImage, rating }) {
    return [
        <div className="ranked-movie_container">
            <img alt={title} src={"https://image.tmdb.org/t/p/w500/" + movieImage} className="ranked-movie"></img>
            <div className="ranked-info__container">
                <h4 className="ranked-title">{title}</h4>
                <span className="star">★<p className="rating">{rating}</p></span>
            </div>
        </div>
    ];
}

export { RankedMovie };