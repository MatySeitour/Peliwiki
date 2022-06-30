import React from "react";
import "./Trends.css"

function Trends({ children }) {
    return [
        <section className="trends">
            <h2 className="trends-title">TRE<b>NDS</b></h2>
            {children}
        </section>
    ]
}

export { Trends }; 