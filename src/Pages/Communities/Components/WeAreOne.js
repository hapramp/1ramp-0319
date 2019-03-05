import React from 'react';

import style from './style.module.css'

import featureImage2 from '../../Home/Components/static/img/featureImage2.gif';

const WeAreOne = () => {
    return (
        <section className={style.sectionAbout}>
            <div className="container">
            <div className={style.aboutWrapper}>
                <h2 className={`${style.sectionTitle} text-color-primary`}>
                #WeAreOne
                </h2>
                <p className={style.aboutText}>
                #WeAreOne is our initiative to give all Steem communities a dedicated space. If your community belongs to Art, Design, Film, Writing, Photography, Travel or other similar domain, you can list it on 1Ramp. Your community’s content will get featured across the 1Ramp platform.
                </p>
                <div className={style.aboutDeco}></div>
            </div>
            </div>
        </section>
    );
};

export default WeAreOne;