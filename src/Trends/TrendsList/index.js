import { useState, useEffect } from "react";
import axios from 'axios';
import { TrendsImg } from "../TrendsImg"
import { API_KEY } from "../../secret";
import "./TrendsList.css"

function TrendsList({ loading, setLoading, movieDetail, setMovieDetail, imageDetail, setImageDetail }) {
    const [trends, setTrends] = useState([]);
    const trendsMoviesLoading = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        },
        {
            id: 7
        },
        {
            id: 8
        },
        {
            id: 9
        },
    ]

    const keyIdTrends = [
        {
            id: 30,
        },
        {
            id: 70,
        },
        {
            id: 36,
        }
    ];



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


    return [
        <div key={keyIdTrends[2].id}>
            {!loading ?
                <ul key={keyIdTrends[0].id} className="trends-list">
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
                :
                <ul key={keyIdTrends[1].id} className="trends-list">
                    {trendsMoviesLoading.map((movie) => (
                        <li key={movie.id} className="trends-img__loading"></li>
                    ))}
                </ul>
            }
        </div>
    ]
}

export { TrendsList };