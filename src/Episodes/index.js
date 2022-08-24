import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../secret";
import { EpisodeSeason } from "../EpisodeSeason";
import "./Episodes.css"

function Episodes({ seasonNumber, seasonListSelect }) {
    const { id } = useParams()
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        seasonNumber.map((season) => {
            if (season.name === seasonListSelect) {
                async function getEpisodes() {
                    const rest = await axios.get(`https://api.themoviedb.org/3/tv/${id}/season/${season.season_number}?api_key=` + API_KEY);
                    setEpisodes(rest.data.episodes)
                }
                return getEpisodes()
            }
        })


    }, [id, seasonNumber, seasonListSelect])

    if (seasonListSelect === "Select Season") {
        return (
            <p>hola</p>
        )
    }

    else {
        return (
            <ul className="episodes-container">
                {episodes.map((episode) => (
                    console.log(episode),
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
        )
    }

}

export { Episodes };