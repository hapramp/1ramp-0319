import React from 'react';

import style from '../style.module.css'

import featureImage2 from '../../Home/Components/static/img/featureImage2.gif';

const About = () => {
    return (
        <section className={style.commAboutSection}>
        <div className="container">
            <div className={style.featureWrapper}>
                <div className={style.featureMeta}>
                    <h2 className={`${style.sectionTitle} text-color-primary`}>
                        Imagine what you’ll create together
                    </h2>
                    <p className={style.featureText}>
                        Bringing all sizes of creative communities in one place where you can collaborate, grow, and inspire.
                    </p>
                </div>
                <div className={style.featureImageHero}>
                    <img src={featureImage2} alt="Interest Feature Image"/>
                </div>
            </div>
        </div>
      </section>
    );
};

export default About;