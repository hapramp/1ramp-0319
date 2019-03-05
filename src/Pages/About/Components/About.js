import React from 'react';
import style from './style.module.css';

import heroImage from './static/img/heroAbout.png';

const About = () => {
    return (
        <section className={style.sectionHero}>
                <div className="container">
                    <div className={style.heroWrapper}>
                        <div className={style.heroMeta}>
                            <h1 className={`${style.heroTitle} text-color-primary`}>1 Place For All Creators</h1>
                            <p className={style.heroText}>We are building a Social media that pays you the true value of your content. So join 1Ramp, do what you love, discover and collaborate in communities, and participate in exciting contests.</p>
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