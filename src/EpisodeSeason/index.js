function EpisodeSeason({ episodeTitle, episodeImage, episodeChapter }) {



    return (
        <li className="episode-container">
            <div className="episode-bacakgroundOpacity"></div>
            <img alt={episodeTitle} src={`https://image.tmdb.org/t/p/w500${episodeImage}`} className="episode-image"></img>
            <div className="episode-details">
                <h6 className="episode-chapter">Chapter {episodeChapter}</h6>
                <p className="episode-title">{episodeTitle}</p>
            </div>
        </li>
    )
}

export { EpisodeSeason }