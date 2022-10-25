import React from "react";
import "../Footer/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'



function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-items__container">
                    <div className="social-media__container">
                        <a href="https://twitter.com/MatySeitour" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=1159640417" target="_blank">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a href="https://www.instagram.com/maty_seitour/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis illo officiis eligendi fuga doloremque.Veritatis, laboriosam voluptatibus eaque odio quaerat doloremque rerum atque, enim praesentium beatae nobis consequatur modi earum ? Lorem ipsum dolor sit </ p>
            </div >
        </footer>
    );
}

export { Footer };