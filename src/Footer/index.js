import React from "react";
import "../Footer/Footer.css"

function Footer({ children }) {
    return [
        <footer className="footer">
            {children}
        </footer>
    ];
}

export { Footer };