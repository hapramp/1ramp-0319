import React, {Component} from 'react';
import style from './style.module.css';

import featureImage1 from './static/img/featureImage3.gif';

export default class Contests extends Component {
    render() {
        return (
            <section className={style.featureSection}>
                <div className="container">
                    <div className={style.featureWrapper}>
                        <div className={style.featureMeta}>
                            <div className={style.featureType}>
                                <div className={style.featureTypeDeco}></div>
                                Contests</div>
                            <h2 className={`${style.sectionTitle} text-color-primary`}>
                            Win Contests, Finish Challenges Or Host Your Own
                            </h2>
                            <p className={style.featureText}>
                            Participate in exciting contests and win prizes or take challenges. Anyone can host their own contests and challenges and invite their friends to compete and have fun.
                            </p>
                        </div>
                        <div className={style.featureImage}>
                            <img src={featureImage1} alt="Interest Feature Image"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
