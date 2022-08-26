import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css"

function Logo() {
    return (
        <div className="logo-container">
            <span className="logo"><p className="logo-title">PELI<b className="logo-letters">WIKI</b></p></span>
        </div>
    );
}

export { Logo };