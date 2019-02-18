import React, { Component } from 'react';

import style from './style.module.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className={style.footerSection}>
        <div className={`container ${style.footerContainer}`}>
            <div className={style.footerWrapper}>
                <div className={style.footerGroup}>
                    <h3 className={style.footerGroupHeader}>Links</h3>
                    <a className={style.footerGroupItem}>Home</a>
                    <a className={style.footerGroupItem}>About</a>
                    <a className={style.footerGroupItem}>FAQs</a>
                </div>
                <div className={style.footerGroup}>
                    <h3 className={style.footerGroupHeader}>Social</h3>
                    <a className={style.footerGroupItem}>Facebook</a>
                    <a className={style.footerGroupItem}>Twitter</a>
                    <a className={style.footerGroupItem}>Instagram</a>
                    <a className={style.footerGroupItem}>LinkedIn</a>
                </div>
                <div className={style.footerGroup}>
                    <h3 className={style.footerGroupHeader}>Blogs</h3>
                    <a className={style.footerGroupItem}>Steemit</a>
                    <a className={style.footerGroupItem}>Medium</a>
                </div>
                <div className={style.footerGroup}>
                    <h3 className={style.footerGroupHeader}>Contact</h3>
                    <a className={style.footerGroupItem}>hi@1ramp.io</a>
                </div>                
            </div>
            <div className={style.footerCr}>
            Copyright 2018 | <a className="text-color-white" href="">Terms</a>
            </div>
        </div>
      </footer>
    )
  }
}
