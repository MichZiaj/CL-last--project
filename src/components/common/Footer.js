import React from 'react';
import {Link} from "react-router-dom";
import logo2 from "../../images/logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="container">
                    <div className="text__container">
                        <div className="footer__social">

                            <a href="https://www.facebook.com/Barbeer-%C5%BBi%C5%BC%C4%85-100233795480292">
                                <FontAwesomeIcon className="footer__icon" icon={faFacebook} size="2x" />
                                </a>

                            <a href="https://www.instagram.com/michelziza/">
                                <FontAwesomeIcon className="footer__icon" icon={faInstagram} size="2x" />
                            </a>

                        </div>
                        <span className="footer__copyright">© 2021 Barbeer Żiżą, All Rights Reserved</span>
                        <Link className='logo__container' to="/">
                            <img className="footer__logo" src={logo2} alt="logo"/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;