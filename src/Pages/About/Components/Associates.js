import React from 'react';
import style from './style.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons';

import memberVikram from './static/img/vikram_hapramp.jpg'
import memberPratyush from './static/img/pratyush_1_hapramp.jpg'
import memberAnkit from './static/img/ankit_hapramp.jpg'
import memberMofid from './static/img/mofid_hapramp.jpg'
import memberRajat from './static/img/rajat_hapramp.jpg'

const Team = () => {
    return (
        <section className={style.TeamSection}>
            <div className="container">
                <div className={style.featureWrapper}>
                    <div className={style.featureMeta}>
                        <div className={style.featureType}>
                            <div className={style.featureTypeDeco}></div>
                            Associates
                        </div>
                        <div className={style.associatesContainer}>
                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;