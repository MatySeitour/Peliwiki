import "./RelatedGenres.css"

function RelatedGenres({ genreName, genreId }) {

    return (
        <div className="genre__container">
            <span></span>
            <p>{genreName}</p>
        </div>
    )
}

export { RelatedGenres };