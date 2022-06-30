import React from "react";
import "./FooterContainer.css";

function FooterContainer({ children }) {
    return [
        <div className="footer-container">
            < p > Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis illo officiis eligendi fuga doloremque.Veritatis, laboriosam voluptatibus eaque odio quaerat doloremque rerum atque, enim praesentium beatae nobis consequatur modi earum ? Lorem ipsum dolor sit </ p>
            {children}
        </div >
    ];
}

export { FooterContainer };