import React, { Component } from 'react';
import style from './style.module.css'

import heroImage from './static/img/heroImage.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

class Hero extends Component {
    render() {
        return (
            <section className={style.sectionHero}>
                <div className="container">
                    <div className={style.heroWrapper}>
                        <div className={style.heroMeta}>
                            <h1 className={`${style.heroTitle} text-color-primary`}>Social media that pays you</h1>
                            <p className={style.heroText}>Imagine if you get paid for ‘likes’. Earn for the entertainment, possibilities, and art you create on the Internet.</p>
                            <div className={style.heroCta}>
                                <a href="https://alpha.1ramp.io/" target="_blank"><FontAwesomeIcon icon={faChrome} color="#3F72AF" /></a>
                                <a href="https://bit.ly/1ramp-landing" target="_blank"><FontAwesomeIcon icon={faGooglePlay} color="#3F72AF" /></a>
                            </div>
                        </div>
                        <div className={style.heroImage}>
                            <img src={heroImage} alt="Hero Image"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;