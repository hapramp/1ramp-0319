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
                            Team
                        </div>
                        <div className={style.teamContainer}>
                            <div className={style.memberContainer}>
                                <img className={style.memberAvatar} src={memberVikram} alt="Profile Photo of Team Member" />
                                <div className={style.memberMeta}>
                                    <h3 className={style.memberName}>Shubhendra Vikram</h3>
                                    <div className={style.memberDesignation}>Business Development</div>
                                    <div className={style.memberLinkContainer}>
                                        <a href="https://alpha.1ramp.io/" target="_blank"><FontAwesomeIcon icon={faFacebookF} color="#3F72AF" /></a>
                                        <a href="https://alpha.1ramp.io/" target="_blank"><FontAwesomeIcon icon={faTwitter} color="#3F72AF" /></a>
                                        <a href="https://bit.ly/1ramp-landing" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} color="#3F72AF" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className={style.memberContainer}>
                                <img className={style.memberAvatar} src={memberPratyush} alt="Profile Photo of Team Member" />
                                <div className={style.memberMeta}>
                                    <h3 className={style.memberName}>Pratyush Singh</h3>
                                    <div className={style.memberDesignation}>Blockchain Engineer</div>
                                    <div className={style.memberLinkContainer}>
                                        <a href="https://alpha.1ramp.io/" target="_blank"><FontAwesomeIcon icon={faFacebookF} color="#3F72AF" /></a>
                                        <a href="https://alpha.1ramp.io/" target="_blank"><FontAwesomeIcon icon={faTwitter} color="#3F72AF" /></a>
                                        <a href="https://bit.ly/1ramp-landing" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} color="#3F72AF" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className={style.memberContainer}>
                                <img className={style.memberAvatar} src={memberAnkit} alt="Profile Photo of Team Member" />
                                <div className={style.memberMeta}>
                                    <h3 className={style.memberName}>Ankit Kumar</h3>
                                    <div className={style.memberDesignation}>Mobile Developer</div>
                                    <div className={style.memberLinkContainer}>
                                        <a href="https://alpha.1ramp.io/" target="_blank"><FontAwesomeIcon icon={faFacebookF} color="#3F72AF" /></a>
                                        <a href="https://alpha.1ramp.io/" target="_blank"><FontAwesomeIcon icon={faTwitter} color="#3F72AF" /></a>
                                        <a href="https://bit.ly/1ramp-landing" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} color="#3F72AF" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className={style.memberContainer}>
                                <img className={style.memberAvatar} src={memberMofid} alt="Profile Photo of Team Member" />
                                <div className={style.memberMeta}>
                                    <h3 className={style.memberName}>Mofid Ansari</h3>
                                    <div className={style.memberDesignation}>UI/UX Designer</div>
                                    <div className={style.memberLinkContainer}>
                                        <a href="https://alpha.1ramp.io/" target="_blank"><FontAwesomeIcon icon={faFacebookF} color="#3F72AF" /></a>
                                        <a href="https://alpha.1ramp.io/" target="_blank"><FontAwesomeIcon icon={faTwitter} color="#3F72AF" /></a>
                                        <a href="https://bit.ly/1ramp-landing" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} color="#3F72AF" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className={style.memberContainer}>
                                <img className={style.memberAvatar} src={memberRajat} alt="Profile Photo of Team Member" />
                                <div className={style.memberMeta}>
                                    <h3 className={style.memberName}>Rajat Dangi</h3>
                                    <div className={style.memberDesignation}>Brand Strategist</div>
                                    <div className={style.memberLinkContainer}>
                                        <a href="https://alpha.1ramp.io/" target="_blank"><FontAwesomeIcon icon={faFacebookF} color="#3F72AF" /></a>
                                        <a href="https://alpha.1ramp.io/" target="_blank"><FontAwesomeIcon icon={faTwitter} color="#3F72AF" /></a>
                                        <a href="https://bit.ly/1ramp-landing" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} color="#3F72AF" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;