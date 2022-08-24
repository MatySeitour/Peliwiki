import "./Season.css"
import { useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../secret";

function Season({ seasons, seasonListState, setSeasonListSelect, setSeasonListState, serieId }) {


    useEffect(() => {
        async function getEpisodes() {
            const rest = await axios.get(`https://api.themoviedb.org/3/tv/${serieId}/season/${1}?api_key=` + API_KEY);
            console.log(rest.data)
        }


        getEpisodes();
    }, [])

    return (
        <ul className={`season-option__container ${seasonListState && `${seasonListState}`} `}>
            {seasons.map((season) => (
                <li key={season.id} onClick={() => {
                    setSeasonListSelect(season.name)
                    setSeasonListState("")
                }
                }

                    className="season-option">{season.name}</li>
            ))}
        </ul>

        // <li className="season-option">
        //     <label for="season">{seasonName}</label>
        // </li>
    )

}

export { Season }