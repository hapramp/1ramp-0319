import React from 'react';
import heroImage from './static/img/1rampLogo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

import style from './style.module.css';

const Header = () => {
    return (
        <header className={style.headerSection}>
            <nav className={style.headerWrapper}>
                <div className={style.logoContainer}>
                    <a href=""><img src={heroImage} alt="Brand Logo"/></a>
                </div>
                <div className={style.navContainer}>
                    <span>Available on</span>
                    <a href=""><FontAwesomeIcon icon={faChrome} color="#3F72AF" /></a>
                    <a href=""><FontAwesomeIcon icon={faGooglePlay} color="#3F72AF" /></a>
                </div>
            </nav>
        </header>
    );
};

export default Header;