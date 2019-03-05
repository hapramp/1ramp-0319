import React from 'react';
import style from './style.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';

import memberVikram from './static/img/vikram_hapramp.jpg'
import memberPratyush from './static/img/pratyush_1_hapramp.jpg'
import memberAnkit from './static/img/ankit_hapramp.jpg'
import memberMofid from './static/img/mofid_hapramp.jpg'
import memberRajat from './static/img/rajat_hapramp.jpg'

import huddle from './static/img/huddle.png';
import nascomm from './static/img/nascomm_logo.png';
import iiitv from './static/img/iiitv.png';

const Team = () => {
    return (
        <section className={style.associatesSection}>
            <div className="container">
                <div className={style.featureWrapper}>
                    <div className={style.featureMeta}>
                        <div className={style.featureType}>
                            <div className={style.featureTypeDeco}></div>
                            Associated with
                        </div>
                        <div className={style.associatesContainer}>
                            <a href="http://huddle.work/" target="__blank"><img src={huddle} alt="" className={style.associatesImg} /></a>
                            <a href="http://10000startups.com/" target="__blank"><img src={nascomm} alt="" className={style.associatesImg} /></a>
                            <a href="http://iiitvadodara.ac.in/" target="__blank"> <img src={iiitv} alt="" className={style.associatesImg} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;