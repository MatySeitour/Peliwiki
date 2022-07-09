import React from "react";
import { TrendsList } from "./TrendsList";
import "./Trends.css"

function Trends({ loading, setLoading }) {
    return [
        <section className="trends">
            <h2 className="trends-title">TRE<b>NDS</b></h2>
            <TrendsList
                setLoading={setLoading}
                loading={loading} />
        </section>
    ]
}

export { Trends }; 