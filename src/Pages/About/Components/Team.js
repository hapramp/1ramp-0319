import React from 'react';
import style from './style.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faFacebookF, faTwitter, faGithubAlt, faDribbble, faMediumM} from '@fortawesome/free-brands-svg-icons';

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
                                        <a href="https://www.linkedin.com/in/shubhendravikram" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} color="#3F72AF" /></a>
                                        <a href="https://www.facebook.com/shubhendrav" target="_blank"><FontAwesomeIcon icon={faFacebookF} color="#3F72AF" /></a>
                                        <a href="https://twitter.com/shubhendrav" target="_blank"><FontAwesomeIcon icon={faTwitter} color="#3F72AF" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className={style.memberContainer}>
                                <img className={style.memberAvatar} src={memberPratyush} alt="Profile Photo of Team Member" />
                                <div className={style.memberMeta}>
                                    <h3 className={style.memberName}>Pratyush Singh</h3>
                                    <div className={style.memberDesignation}>Blockchain Engineer</div>
                                    <div className={style.memberLinkContainer}>
                                        <a href="https://www.linkedin.com/in/singh-pratyush/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} color="#3F72AF" /></a>
                                        <a href="https://twitter.com/singhpratyush_" target="_blank"><FontAwesomeIcon icon={faTwitter} color="#3F72AF" /></a>
                                        <a href="https://github.com/singhpratyush" target="_blank"><FontAwesomeIcon icon={faGithubAlt} color="#3F72AF" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className={style.memberContainer}>
                                <img className={style.memberAvatar} src={memberAnkit} alt="Profile Photo of Team Member" />
                                <div className={style.memberMeta}>
                                    <h3 className={style.memberName}>Ankit Kumar</h3>
                                    <div className={style.memberDesignation}>Mobile Developer</div>
                                    <div className={style.memberLinkContainer}>
                                        <a href="https://www.linkedin.com/in/bxute" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} color="#3F72AF" /></a>
                                        <a href="https://twitter.com/ankitkumar_071" target="_blank"><FontAwesomeIcon icon={faTwitter} color="#3F72AF" /></a>
                                        <a href="https://github.com/bxute" target="_blank"><FontAwesomeIcon icon={faGithubAlt} color="#3F72AF" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className={style.memberContainer}>
                                <img className={style.memberAvatar} src={memberMofid} alt="Profile Photo of Team Member" />
                                <div className={style.memberMeta}>
                                    <h3 className={style.memberName}>Mofid Ansari</h3>
                                    <div className={style.memberDesignation}>UI/UX Designer</div>
                                    <div className={style.memberLinkContainer}>
                                        <a href="https://www.linkedin.com/in/ansarimofid" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} color="#3F72AF" /></a>
                                        <a href="https://dribbble.com/ansarimofid" target="_blank"><FontAwesomeIcon icon={faDribbble} color="#3F72AF" /></a>
                                        <a href="https://github.com/ansrimofid" target="_blank"><FontAwesomeIcon icon={faGithubAlt} color="#3F72AF" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className={style.memberContainer}>
                                <img className={style.memberAvatar} src={memberRajat} alt="Profile Photo of Team Member" />
                                <div className={style.memberMeta}>
                                    <h3 className={style.memberName}>Rajat Dangi</h3>
                                    <div className={style.memberDesignation}>Brand Strategist</div>
                                    <div className={style.memberLinkContainer}>
                                        <a href="https://www.linkedin.com/in/rajatdangi/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} color="#3F72AF" /></a>
                                        <a href="https://twitter.com/TheRajatDangi" target="_blank"><FontAwesomeIcon icon={faTwitter} color="#3F72AF" /></a>
                                        <a href="https://medium.com/@rajatkumardangi" target="_blank"><FontAwesomeIcon icon={faMediumM} color="#3F72AF" /></a>
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