import React, {Component} from 'react';
import style from './style.module.css';

import featureImage2 from './static/img/featureImage2.png';

export default class Extras extends Component {
    render() {
        return (
            <section className={style.featureExtras}>
                <div className="container">
                    <div className={style.extrasWrapper}>

                        <div className={style.featureMeta}>
                            <h2 className={`${style.sectionTitle} text-color-primary`}>
                                Communities, Imagine What You’ll Create Together
                            </h2>
                        </div>
                        <div className={style.featureImage}>
                            <p className={style.extrasText}>
                                Online or offline, communities need space to thrive. Discover, join, and create
                                communities, where you can invite your friends, collaborate, and use it the way
                                you want to.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
