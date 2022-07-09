import { useState, useEffect } from "react";
import axios from 'axios';
import { TrendsMovie } from "../TrendsMovie";
import { TrendsImg } from "../TrendsImg"
import { API_KEY } from "../../secret";
import "./TrendsList.css"

function TrendsList({ loading, setLoading }) {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

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
        console.log(trends)
        return [
            <ul className="trends-list">
                {trends.map((movie) => (
                    < TrendsMovie
                        title={movie.title}
                        loading={loading}
                    >
                        <TrendsImg
                            image={movie.poster_path}
                            title={movie.title}
                            loading={loading}
                            rating={movie.vote_average.toFixed(1)}
                        />
                    </ TrendsMovie>
                ))}
            </ul>
        ]
    }
    else {
        return [
            <ul className="trends-list">
                {list.map((movie) => (
                    < TrendsMovie
                        loading={loading}
                    >
                        <TrendsImg
                            loading={loading}
                        />
                    </ TrendsMovie>
                ))}
            </ul>
        ]
    }
}

export { TrendsList };