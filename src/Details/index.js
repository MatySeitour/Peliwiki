import { useEffect, useState } from "react";
import axios from 'axios';
import { API_KEY } from "../secret";
import { Link } from "react-router-dom";

import "./Details.css"


function Details({ movieDetail, setMovieDetail, imageDetail }) {

    const [details, setDetails] = useState({
        background: "",
        title: "",
        popularity: 0,
        description: "",
        tagline: "",
        releaseData: "",
    })

    const movie_id = window.location.pathname.split("/")[2]

    useEffect(() => {
        async function getDetails() {
            try {
                const rest = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=` + API_KEY);
                console.log(rest.data)
                setDetails({
                    ...details,
                    background: rest.data.poster_path,
                    title: rest.data.title,
                    popularity: rest.data.vote_average,
                    description: rest.data.overview,
                    tagline: rest.data.tagline,
                    releaseData: rest.data.release_date,
                });
            }
            catch (error) {
                console.log(error);
            }
        }

        getDetails();
    }, [])

    console.log(details)

    const urlBase = "https://image.tmdb.org/t/p/w500/";
    const sectionStyle = {
        width: "100%",
        height: "600px",
        backgroundImage: `url("${urlBase}${details.background}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <section className="movieDetail-container">
            <div style={sectionStyle} className="movie-image">
                <div className="background-opacity"></div>
                <Link to={`/`}
                    // onClick={() => {
                    //     setMovieDetail(false)
                    // }}
                    className="arrow-left__container">
                    <svg className="arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" /></svg>
                </Link>
                <h4 className="movieDetail-tagline">"{details.tagline}"</h4>
            </div>

            <article>
                <div className="movieDescription-container">
                    <div className="movieDescription-details">
                        <h5 className="movieDescription-title">{details.title}</h5>
                        <span className="movieDescription-rate">★ <p>{details.popularity}</p></span>
                    </div>
                    <p className="movieDescription-overview">{details.description}</p>
                    <p className="date-release">{details.releaseData}</p>
                </div>
            </article>
        </section >
    );
}

export { Details }