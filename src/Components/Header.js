import React from 'react';
import heroImage from './static/img/1rampLogo.png';

import {NavLink} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

import style from './style.module.css';

const Header = () => {
    return (
        <header className={style.headerSection}>
            <nav className={style.headerWrapper}>
                <div className={style.logoContainer}>
                    <NavLink to="/"><img src={heroImage} alt="Brand Logo"/></NavLink>
                </div>
                <div className={style.navContainer}>
                    <div className={style.navGroup}>
                        <NavLink to='/about' activeClassName="navActive">About</NavLink>
                        <NavLink to='/communities' activeClassName="navActive">Communities</NavLink>
                    </div>
                    <span>Available on</span>
                    <div className={style.navCta}>
                        <a href="https://alpha.1ramp.io/" target="_blank"><FontAwesomeIcon icon={faChrome} color="#3F72AF" /></a>
                        <a target="_blank" href="https://bit.ly/1ramp-landing"><FontAwesomeIcon icon={faGooglePlay} color="#3F72AF" /></a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;