import { useEffect, useState } from "react";
import axios from 'axios';
import { API_KEY } from "../secret";
import { useParams } from "react-router-dom";
import { RelatedGenres } from "../RelatedGenres";
import { BelongColection } from "../BelongColection";
import { SimilarMovies } from "../SimilarMovies";

import "./Details.css"


function Details({ }) {

    const [details, setDetails] = useState({
        background: "",
        title: "",
        popularity: 0,
        description: "",
        tagline: "",
        releaseData: "",
        relatedGenres: [],
    })

    const [detailsLoading, setDetailsLoading] = useState(true);

    const [belongsColection, setBelongColection] = useState(null)
    const [detailsMovieId, setDetailsMovieId] = useState(null)

    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0)

        async function getDetails() {
            try {
                const rest = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=` + API_KEY);
                setDetailsLoading(false)
                if (rest.data.belongs_to_collection !== null) {
                    setDetails({
                        ...details,
                        background: rest.data.poster_path,
                        title: rest.data.title,
                        popularity: rest.data.vote_average,
                        description: rest.data.overview,
                        tagline: rest.data.tagline,
                        releaseData: rest.data.release_date,
                        relatedGenres: rest.data.genres,

                    });
                    setBelongColection(rest.data.belongs_to_collection.id)
                    setDetailsMovieId(rest.data.id);

                }
                else {
                    setDetails({
                        ...details,
                        background: rest.data.poster_path,
                        title: rest.data.title,
                        popularity: rest.data.vote_average,
                        description: rest.data.overview,
                        tagline: rest.data.tagline,
                        releaseData: rest.data.release_date,
                        relatedGenres: rest.data.genres,
                    });
                    setBelongColection(null)
                    setDetailsMovieId(rest.data.id);
                }

            }
            catch (error) {
                console.log(error);
                setDetailsLoading(false)
            }
        }



        getDetails();
    }, [id])

    const urlBase = "https://image.tmdb.org/t/p/w500/";
    const sectionStyle = {
        width: "100%",
        height: "600px",
        backgroundImage: `url("${urlBase}${details.background}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    if (detailsLoading) {
        return [
            <div className="details-image__loading">
                <div class="lds-dual-ring"></div>
            </div>,

            <div className="movie-loading__container">
                <div className="movies-loading"></div>
                <div className="movies-loading"></div>
                <div className="movies-loading"></div>
                <div className="movies-loading"></div>
                <div className="movies-loading"></div>
                <div className="movies-loading"></div>
                <div className="movies-loading"></div>
            </div>
        ]
    }

    else {
        return [
            <section className="movieDetail-container">
                <div style={sectionStyle} className="movie-image">
                    <div className="background-opacity"></div>
                    <div
                        onClick={() => {
                            window.history.back()
                        }}
                        className="arrow-left__container">
                        <svg className="arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M77.25 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C175.6 444.9 183.8 448 192 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L77.25 256zM269.3 256l137.4-137.4c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25l160 160C367.6 444.9 375.8 448 384 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L269.3 256z" /></svg>
                    </div>
                    <h4 className={`movieDetail-tagline ${!details.tagline && `inactive`}`}>"{details.tagline}"</h4>
                </div>

                <article className="movieDescription">
                    <div className="movieDescription-container">
                        <div className="movieDescription-details">
                            <h5 className="movieDescription-title">{details.title}</h5>
                            <div className="movieDescription-rate"><span className="movieDetails-star">★</span><p>{details.popularity}</p></div>
                        </div>
                        <div className="movieDescription-overview__container">
                            <p className="movieDescription-overview">{details.description}</p>
                        </div>
                        <div className="movieDetail-genres">
                            {details.relatedGenres.map((genre) => (
                                <RelatedGenres
                                    key={genre.id}
                                    genreId={genre.id}
                                    genreName={genre.name}
                                />
                            )
                            )}
                        </div>
                        <p className="date-release">{details.releaseData}</p>
                    </div>
                </article>,

                <BelongColection
                    belongMovies={belongsColection}
                    movieId={detailsMovieId}
                />,

                <SimilarMovies
                    similarIdMovie={detailsMovieId}
                />


            </section >
        ];
    }
}

export { Details }