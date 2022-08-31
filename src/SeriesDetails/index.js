import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { API_KEY } from "../secret"
import { RelatedGenres } from "../RelatedGenres"
import { Episodes } from "../Episodes"
import "./SeriesDetails.css"
import { Season } from "../Season"

function SeriesDetails() {
    const { id } = useParams()
    const [serieDetail, setSerieDetail] = useState({
        background: "",
        title: "",
        popularity: 0,
        description: "",
        releaseData: "",
        relatedGenres: [],
        episodes: [],
        seasons: [],
    })

    const [seasonList, setSeasonList] = useState("")
    const [seasonListSelect, setSeasonListSelect] = useState("Select Season")

    useEffect(() => {
        window.scrollTo(0, 0)
        async function getSerieDetails() {
            try {
                const rest = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=` + API_KEY);
                setSerieDetail({
                    ...serieDetail,
                    background: rest.data.poster_path,
                    title: rest.data.name,
                    popularity: rest.data.popularity,
                    description: rest.data.overview,
                    releaseData: rest.data.first_air_date,
                    relatedGenres: rest.data.genres,
                    episodes: rest.data.episode_run_time,
                    seasons: rest.data.seasons,
                })
            }
            catch (error) {
                console.log(error)
            }
        }

        getSerieDetails()

    }, [id])


    const urlBase = "https://image.tmdb.org/t/p/w500/";
    const sectionStyle = {
        width: "100%",
        height: "600px",
        backgroundImage: `url("${urlBase}${serieDetail.background}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    console.log(serieDetail.title)

    const episode_number = seasonListSelect.split(" ");
    return (
        <section className="movieDetail-container">
            <div style={sectionStyle} className="movie-image">
                <div className="background-opacity"></div>
                <div
                    onClick={() => {
                        window.history.back()
                    }}
                    className="arrow-left__container">
                    <svg className="arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" /></svg>
                </div>
                <h4 className="movieDetail-tagline"></h4>
            </div>

            <article className="movieDescription">
                <div className="movieDescription-container">
                    <div className="movieDescription-details">
                        <h5 className="movieDescription-title">{serieDetail.title}</h5>
                        <div className="movieDescription-rate"><span className="movieDetails-star">★</span><p>{serieDetail.popularity}</p></div>
                    </div>
                    <div className="movieDescription-overview__container">
                        <p className="movieDescription-overview">{serieDetail.description}</p>
                    </div>
                    <div className="movieDetail-genres">
                        {serieDetail.relatedGenres.map((genre) => (
                            <RelatedGenres
                                key={genre.id}
                                genreId={genre.id}
                                genreName={genre.name}
                            />
                        )
                        )}
                    </div>
                    <p className="series-data__relase">{serieDetail.releaseData}</p>
                    <h5 className="seriesDescription-title">Select Season</h5>
                    <li onClick={() => {
                        if (seasonList === "") {
                            return setSeasonList("active")
                        }
                        else {
                            return setSeasonList("")
                        }
                    }
                    }
                        className="season-option__default">
                        <p>{seasonListSelect}</p>
                        <svg className={`${seasonList && `rotate`}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z" /></svg>
                    </li>

                    <Season
                        serieId={id}
                        seasonListSelect={seasonListSelect}
                        setSeasonListSelect={setSeasonListSelect}
                        seasonListState={seasonList}
                        setSeasonListState={setSeasonList}
                        seasons={serieDetail.seasons}
                    />

                    <Episodes
                        seasonName={serieDetail.title}
                        seasonNumber={serieDetail.seasons}
                        episode_number={episode_number}
                        seasonListSelect={seasonListSelect}
                    />
                </div>

            </article>,

        </section >
    )
}

export { SeriesDetails }