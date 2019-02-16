import React, { Component } from 'react';
import style from './style.module.css';

import featureImage1 from './static/img/featureImage1.png';

export default class Interests extends Component {
  render() {
    return (
      <section className={style.featureSection}>
        <div className="container">
            <div className={style.featureWrapper}>
                <div className={style.featureMeta}>
                    <div className={style.featureType}>
                    <div className={style.featureTypeDeco}></div>
                    Interests</div>
                    <h2 className={`${style.sectionTitle} text-color-primary`}>
                        Everything That You Love, in One Place
                    </h2>
                    <p className={style.featureText}>
                        1Ramp is for photographers, writers, designers, artists, and people with similar creative interests. Feed, communities, and contests, it all revolves around your interests.
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
