import React, {Component} from 'react';
import style from './style.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome, faGithub } from '@fortawesome/free-brands-svg-icons';


export default class Extras extends Component {
    render() {
        return (
            <section className={style.featureExtras}>
                <div className={`container ${style.extrasContainer}`}>
                    <div className={style.extrasWrapper}>

                        <div className={style.extrasMeta}>
                            <h2 className={`${style.sectionTitle} text-color-primary`}>
                            Built on Steem Blockchain
                            </h2>
                        </div>
                        <div className={style.extrasImage}>
                            <p className={style.extrasText}>
                            Steem is a social blockchain that grows communities and makes immediate revenue streams possible for users by rewarding them for sharing content.
                            </p>
                            <a className={style.extrasLink} href="https://steem.com"><FontAwesomeIcon icon={faChrome} color="#3F72AF" />
                            Steem</a>
                        </div>

                    </div>
                    <div className={style.extrasWrapper}>

                        <div className={style.extrasMeta}>
                            <h2 className={`${style.sectionTitle} text-color-primary`}>
                            Open Source
                            </h2>
                        </div>
                        <div className={style.extrasImage}>
                            <p className={style.extrasText}>
                            1Ramp is open source. Contribute, suggest changes or track development on Github. 
                            </p>
                            <a className={style.extrasLink} href="https://github.com/hapramp"><FontAwesomeIcon icon={faGithub} color="#3F72AF" />
                            Github</a>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
