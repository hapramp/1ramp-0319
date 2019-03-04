import React from 'react';

import style from '../style.module.css'

import recordpool from './static/img/recordpool.png';
import curie from './static/img/curie.jpeg';
import travelFeed from './static/img/travelFeed.jpeg';
import sndbox from './static/img/sndbox.png';
import foxtales from './static/img/foxtales.png';
import freewrite from './static/img/freewrite.jpeg';
import photofeed from './static/img/photofeed.jpeg';
import crowdmind from './static/img/crowdmind.png';
import photomag from './static/img/photomag.png';
import socalsteemit from './static/img/socalsteemit.jpeg';
import ecotrain from './static/img/ecotrain.png';

const CommunityListing = () => {
    return (
        <section className={style.listingSection}>
            <div className="container">
                <div className={style.featureWrapper}>
                    <div className={style.featureMeta}>
                        <div className={style.featureType}>
                            <div className={style.featureTypeDeco}></div>
                            Communities on 1Ramp
                        </div>

                        <div className={style.listContainer}>
                            <a href="https://alpha.1ramp.io/community/recordpool" className={style.listItem } target="__blank">
                                <img src={recordpool} alt=""/>
                                <span>#recordpool</span>
                            </a>

                            <a href="https://alpha.1ramp.io/community/curie" className={style.listItem } target="__blank">
                                <img src={curie} alt=""/>
                                <span>#curie</span>
                            </a>

                            <a href="https://alpha.1ramp.io/community/travelfeed" className={style.listItem } target="__blank">
                                <img src={travelFeed} alt=""/>
                                <span>#travelfeed</span>
                            </a>

                            <a href="https://alpha.1ramp.io/community/sndbox" className={style.listItem } target="__blank">
                                <img src={sndbox} alt=""/>
                                <span>#sndbox</span>
                            </a>

                            <a href="https://alpha.1ramp.io/community/foxtales" className={style.listItem } target="__blank">
                                <img src={foxtales} alt=""/>
                                <span>#foxtales</span>
                            </a>

                            <a href="https://alpha.1ramp.io/community/freewrite" className={style.listItem } target="__blank">
                                <img src={freewrite} alt=""/>
                                <span>#freewrite</span>
                            </a>

                            <a href="https://alpha.1ramp.io/community/photofeed" className={style.listItem } target="__blank">
                                <img src={photofeed} alt=""/>
                                <span>#photofeed</span>
                            </a>

                            <a href="https://alpha.1ramp.io/community/crowdmind" className={style.listItem } target="__blank">
                                <img src={crowdmind} alt=""/>
                                <span>#crowdmind</span>
                            </a>


                            <a href="https://alpha.1ramp.io/community/photomag" className={style.listItem } target="__blank">
                                <img src={photomag} alt=""/>
                                <span>#photomag</span>
                            </a>

                            <a href="https://alpha.1ramp.io/community/ecotrain" className={style.listItem } target="__blank">
                                <img src={ecotrain} alt=""/>
                                <span>#ecotrain</span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunityListing;