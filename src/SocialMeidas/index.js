import React from "react";
import "./SocialMedias.css"

function SocialMedias({ children }) {

    return [

        <div className="social-media__container">
            {children}
        </div>
    ]
}

export { SocialMedias };