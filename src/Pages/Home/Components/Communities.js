import React, {Component} from 'react';
import style from './style.module.css';

import featureImage2 from './static/img/featureImage2.gif';

export default class Communities extends Component {
    render() {
        return (
            <section className={style.featureSection}>
                <div className="container">
                    <div className={style.featureWrapper}>
                        <div className={style.featureImage}>
                            <img src={featureImage2} alt="Interest Feature Image"/>
                        </div>
                        <div className={style.featureMeta}>
                            <div className={style.featureType}>
                                <div className={style.featureTypeDeco}></div>
                                    Communities
                                </div>
                            <h2 className={`${style.sectionTitle} text-color-primary`}>
                                Communities, Imagine What You’ll Create Together
                            </h2>
                            <p className={style.featureText}>
                            Online or offline, communities need space to thrive. Discover, join, and create communities, where you can invite your friends, collaborate, and use it the way you want to.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
