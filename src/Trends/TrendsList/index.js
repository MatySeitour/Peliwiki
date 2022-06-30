import React, { Children } from "react";
import "./TrendsList.css"

function TrendsList({ children }) {
    return [
        <ul className="trends-list">
            {children}
        </ul>
    ]
}

export { TrendsList };