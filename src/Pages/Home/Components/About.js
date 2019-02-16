import React, { Component } from 'react';
import style from './style.module.css'

class About extends Component {
    render() {
        return (
            <section className={style.sectionAbout}>
                <div className="container">
                <div className={style.aboutWrapper}>
                    <h2 className={`${style.sectionTitle} text-color-primary`}>
                        1Ramp is a New Kind of Social Media
                    </h2>
                    <p className={style.aboutText}>
                        It is being built with a future in mind where every creator on the Internet earns fair monetary value for their content.
                    </p>
                    <div className={style.aboutDeco}></div>
                </div>
                </div>
            </section>
        );
    }
}

export default About;