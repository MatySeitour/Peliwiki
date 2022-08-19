import { useState, useEffect } from "react"
import axios from "axios";
import { API_KEY } from "../secret";
import { SeriesRanked } from "../SeriesRanked";


function Series({ loading, setLoading }) {
    const [seriesRated, setSeriesRated] = useState([])

    useEffect(() => {

        async function getRatedSeries() {
            try {
                const rest = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?language=en&&api_key=` + API_KEY);
                console.log(rest.data.results)
                setLoading({
                    loading: false,
                })
                setSeriesRated(rest.data.results);
            }
            catch (error) {
                console.log(error)
            }


        }
        getRatedSeries();
    }, [])


    if (!loading) {
        return (

            <article className="ranked-container" >
                {
                    seriesRated.map((movie) =>
                        <SeriesRanked
                            key={movie.id}
                            seresId={movie.id}
                            title={movie.name}
                            movieImage={movie.poster_path}
                            rating={movie.vote_average}
                        />
                    )
                }
            </article >
        );
    }
    else {
        return (
            <article className="ranked-container">
                <div className="ranked-loading"></div>
                <div className="ranked-loading"></div>
                <div className="ranked-loading"></div>
                <div className="ranked-loading"></div>
                <div className="ranked-loading"></div>
                <div className="ranked-loading"></div>
                <div className="ranked-loading"></div>
                <div className="ranked-loading"></div>
                <div className="ranked-loading"></div>
            </article>
        )
    }

}

export { Series };