import React from 'react';
import style from './style.module.css';

import heroImage from './static/img/heroAbout.png';

const About = () => {
    return (
        <section className={style.sectionHero}>
                <div className="container">
                    <div className={style.heroWrapper}>
                        <div className={style.heroMeta}>
                            <h1 className={`${style.heroTitle} text-color-primary`}>1Ramp is a New Kind of Social Media</h1>
                            <p className={style.heroText}>What will happen if we bring artists, designers, photographers, writers, dancers, musicians and people from different creative domains at one place? And What if we give them ways to collaborate, compete, and build communities? We are trying to answer the same questions through 1Ramp.</p>
                        </div>
                        <div className={style.heroImage}>
                            <img src={heroImage} alt="Hero Image"/>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default About;