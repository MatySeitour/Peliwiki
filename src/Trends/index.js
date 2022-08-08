import React from "react";
import { TrendsList } from "./TrendsList";
import "./Trends.css"

function Trends({ loading, setLoading, movieDetail, setMovieDetail, imageDetail, setImageDetail }) {
    return [
        <section className="trends">
            <h2 className="trends-title">TRE<b>NDS</b></h2>
            <TrendsList
                movieDetail={movieDetail}
                setMovieDetail={setMovieDetail}
                setLoading={setLoading}
                loading={loading}
                imageDetail={imageDetail}
                setImageDetail={setImageDetail}
            />
        </section>
    ]
}

export { Trends }; 