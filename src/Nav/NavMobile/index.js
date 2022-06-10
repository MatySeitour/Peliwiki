import React from "react";
import "./NavMobile.css"

function NavMobile({ children }) {
    return [
        <div className="nav-container">
            {children}
        </div>,

    ]
}

export { NavMobile };