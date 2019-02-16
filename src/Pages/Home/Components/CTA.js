import React, { Component } from 'react';
import style from './style.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

export default class CTA extends Component {
  render() {
    return (
      <section className={style.sectionCTA}>
        <div className="container">
            <div className={style.CTATitle}>Get on 1Ramp</div>
            <div className={style.CTAText}>Pick your interests, explore communities, and win contests.</div>
            <div className={style.CTAIcons}>
                <a href=""><FontAwesomeIcon icon={faChrome} color="#FFF" /></a>
                <a href=""><FontAwesomeIcon icon={faGooglePlay} color="#FFF" /></a>
            </div>
        </div>
      </section>
    )
  }
}
