import React from "react";
import "./SocialMediasContainer.css"

function SocialMediasContainer({ children }) {
    return [
        <div className="items-container">
            {children}
        </div>
    ];
}

export { SocialMediasContainer };