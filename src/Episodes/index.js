import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../secret";
import { EpisodeSeason } from "../EpisodeSeason";
import "./Episodes.css"

function Episodes({ seasonNumber, seasonListSelect, seasonName }) {
    const { id } = useParams()
    const [episodes, setEpisodes] = useState({
        chapters: [],
        seasonName: "",
    })

    useEffect(() => {
        seasonNumber.map((season) => {
            if (season.name === seasonListSelect) {
                async function getEpisodes() {
                    const rest = await axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${season.season_number}?api_key=` + API_KEY);
                    setEpisodes({
                        ...episodes,
                        chapters: rest.data.episodes,
                        seasonName: season.name
                    })
                }
                return getEpisodes()
            }
        })


    }, [id, seasonNumber, seasonListSelect])

    if (seasonListSelect === "Select Season") {
        return (
            <div></div>
        )
    }

    else {
        return [
            <div className="season-title__container">
                <h3>
                    {seasonName + ": " + episodes.seasonName}
                </h3>
            </div>,
            <ul className="episodes-container">
                {episodes.chapters.map((episode) => (
                    <EpisodeSeason
                        key={episode.id}
                        episodeTitle={episode.name}
                        episodeImage={episode.still_path}
                        episodeChapter={episode.episode_number}
                    />
                ))
                }
            </ul>
            // <div className="episodes-container">
            //     <div className="episode-container">
            //         <div className="episode-image"></div>
            //         <div className="episode-details">
            //             <h4></h4>
            //             <p></p>
            //         </div>
            //     </div>
            // </div>
        ]
    }

}

export { Episodes };