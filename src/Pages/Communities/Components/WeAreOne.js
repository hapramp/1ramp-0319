import React from 'react';

import style from './style.module.css'

import featureImage2 from '../../Home/Components/static/img/featureImage2.gif';

const WeAreOne = () => {
    return (
        <section className={style.commAboutSection}>
            <div className="container">
                <div className={style.featureWrapper}>
                    <div className={style.featureImage}>
                        <img src={featureImage2} alt="Interest Feature Image"/>
                    </div>
                    <div className={style.featureMeta}>
                        <h2 className={`${style.sectionTitle} text-color-primary`}>
                        #WeAreOne
                        </h2>
                        <p className={style.featureText}>
                        #WeAreOne is our initiative to give all Steem communities a dedicated space. If your community belongs to Art, Design, Film, Writing, Photography, Travel or any other creative domain, you can list it on 1Ramp. Your community’s content and hashtag will get featured across the 1Ramp platform.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeAreOne;