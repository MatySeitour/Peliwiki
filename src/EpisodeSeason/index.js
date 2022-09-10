import useIntersection from "../CustomHooks/useIntersection"
import { useRef } from "react";

function EpisodeSeason({ episodeTitle, episodeImage, episodeChapter }) {
    const ref = useRef(null);

    const screen = useIntersection(ref);

    if (episodeImage === null) {

    }

    return (
        <li ref={ref} className="episode-container">
            {screen && <>
                <div className="episode-bacakgroundOpacity"></div>
                {console.log(episodeImage
                )}
                <img alt={episodeTitle} src={`https://image.tmdb.org/t/p/w500${episodeImage}`} className="episode-image"></img>
                <div className="episode-details">
                    <h6 className="episode-chapter">Chapter {episodeChapter}</h6>
                    <p className="episode-title">{episodeTitle}</p>
                </div>
            </>
            }

        </li>
    )
}

export { EpisodeSeason }