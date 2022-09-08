import { useState, useEffect } from "react";
import axios from 'axios';
import { TrendsImg } from "../TrendsImg"
import { API_KEY } from "../../secret";
import "./TrendsList.css"

function TrendsList({ loading, setLoading, movieDetail, setMovieDetail, imageDetail, setImageDetail }) {


    const [trends, setTrends] = useState([]);


    useEffect(() => {
        async function getTrends() {
            try {
                const rest = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=` + API_KEY);
                setLoading({
                    loading: false,
                })
                setTrends(rest.data.results);
            }
            catch (error) {
                console.log(error);
            }
        }
        getTrends();
    }, [])


    if (!loading) {
        return [
            <ul className="trends-list">
                {trends.map((movie) => (
                    <TrendsImg
                        key={movie.id}
                        movieId={movie.id}
                        movieDetail={movieDetail}
                        setMovieDetail={setMovieDetail}
                        image={movie.poster_path}
                        title={movie.title}
                        loading={loading}
                        rating={movie.vote_average.toFixed(1)}
                        imageDetail={imageDetail}
                        setImageDetail={setImageDetail}
                    />
                ))}
            </ul>
        ]
    }
    else {
        return [
            <ul className="trends-list">
                <li className="trends-img__loading"></li>
                <li className="trends-img__loading"></li>
                <li className="trends-img__loading"></li>
                <li className="trends-img__loading"></li>
                <li className="trends-img__loading"></li>
            </ul>
        ]
    }
}

export { TrendsList };