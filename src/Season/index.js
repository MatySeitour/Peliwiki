import "./Season.css"

function Season({ seasons, seasonListState, setSeasonListSelect, setSeasonListState }) {


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