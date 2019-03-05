import React, {useEffect, useState} from 'react';
import heroImage from './static/img/1rampLogo.png';

import {NavLink} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

import style from './style.module.css';

const Header = () => {
    const [navToggle, setNavToggle] = useState(0);
    const [mobileNavStyle, setMobileNavStyle] = useState({width:0});

    useEffect(() => {
        console.log("From Effect");
        if(navToggle)
            setMobileNavStyle({width:"100vw", transition: "width 0"});
        else
            setMobileNavStyle({width:0});
        
    }, [navToggle])

    return (
        <header className={style.headerSection}>
            <nav className={style.headerWrapper}>
                <div className={style.logoContainer}>
                    <div onClick={()=>{setNavToggle(1)}} className={style.navMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <NavLink to="/"><img src={heroImage} alt="Brand Logo"/></NavLink>
                </div>
                <div className={style.navContainer}>
                    <div className={style.navGroup}>
                        <NavLink exact to='/' activeClassName="navActive">Home</NavLink>
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
            <nav style={mobileNavStyle} className={style.mobileNav}>
                <div onClick={()=>setNavToggle(0)}  className={style.navClose}>
                    <span></span>
                    <span></span>
                </div>
                <div className={style.mobileNavGroup}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/communities'>Communities</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;